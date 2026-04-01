import { Button, Input, Modal } from "antd";
import axios from "axios";
import { Component } from "react";

let url = "http://37.27.29.18:8001/api/to-dos";
let urlImage =  "http://37.27.29.18:8001/images";
let urlComplete = "http://37.27.29.18:8001/completed";
class Home extends Component {
  state = {
    todos: [],
    isModalOpen: false,
    isModalOpenE: false,
    edit: {
      
      name: "",
      description: "",
    },
      isModalOpenI: false,
  };

  async getTodos() {
    try {
      const { data } = await axios.get(url);
      console.log(data);
      this.setState({ todos: data.data });
    } catch (error) {
      console.error(error);
    }
  }

  componentDidMount() {
    this.getTodos();
  }

  async Delete(id) {
    try {
      await axios.delete(`${url}?id=${id}`);
      this.getTodos();
    } catch (error) {
      console.error(error);
    }
  }
  showModal = () => {
    this.setState({ isModalOpen: true });
  };

  handleOk = () => {
    this.setState({ isModalOpen: false });
  };

  handleCancel = () => {
    this.setState({ isModalOpen: false });
  };

  showModalE = (todo) => {
    this.setState({
      isModalOpenE: true,
      edit: { id: todo.id, name: todo.name, description: todo.description },
    });
  };

  handleCancelE = () => {
    this.setState({ isModalOpenE: false });
  };


  showModalI = () => {
    this.setState({ isModalOpenI: true });
  };

  handleCancelI = () => {
    this.setState({ isModalOpenI: false });
  }
  add = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append("Images", e.target.img.files[0]);
    formData.append("Name", e.target.name.value);
    formData.append("Description", e.target.description.value);
    try {
      await axios.post(url, formData);
      this.getTodos();
      this.setState({ isModalOpen: false });
    } catch (error) {
      console.error(error);
    }
  };
  check = async (id) => {
    try {
      await axios.put(`${urlComplete}?id=${id}`);
      this.getTodos();
    } catch (error) {
      console.error(error);
    }
  };
  edit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(url, {
        id: this.state.edit.id,
        name: e.target.name.value,
        description: e.target.description.value,
      });
      this.getTodos();
      this.setState({ isModalOpenE: false });
    } catch (error) {
      console.error(error);
    }
  };

  delImg = async (id) => { 
    try {
      await axios.delete(`${url}/images/${id}`);
      this.getTodos();
    } catch (error) {
      console.error(error);
    }
  };
  addImg = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const files = e.target.img.files;
    for (let i = 0; i < files.length; i++) {
      formData.append("Images", files[i]);
    }
    formData.append("ToDoId", this.state.edit.id);
    try {
      await axios.post(`${url}/images`, formData);
      this.getTodos();
      this.setState({ isModalOpenI: false });
    } catch (error) {
      console.error(error);
    }
  };
  render() {
    return (
      <section>
        <div>
          <h1>To-Do List</h1>
          <Button variant="solid" color="blue" onClick={() => this.showModal()}>
            +Add To-Do
          </Button>
          <ul>
            {this.state.todos.map((todo) => (
              <section
                key={todo.id}
                className=" w-[250px] h-[300px] shadow-2xl flex items-center justify-center flex-col"
              >
               {
                todo.images.map((img) => (
                  <>
                  <img src={`${urlImage}/${img.imageName}`} alt="todo" className="w-[100px] h-[100px] object-cover" />
                  <Button variant="solid" color="red" onClick={() => this.delImg(img.id)}>
                    del Img
                  </Button>
                  </>
                 
                )
                
              )  
            }
                <p>{todo.name}</p>
                <Button onClick={() => this.showModalI()}>Add Image</Button>
                <Button
                  variant="solid"
                  color="red "
                  onClick={() => this.Delete(todo.id)}
                >
                  del
                </Button>
                <input
                  type="checkbox"
                  checked={todo.isCompleted}
                  onChange={() => this.check(todo.id)}
                />

                <p
                  className={
                    todo.isCompleted ? "text-green-500" : "text-red-500"
                  }
                >
                  {todo.isCompleted ? "Completed" : "Not Completed"}
                </p>
                <Button onClick={() => this.showModalE(todo)}>Edit</Button>
              </section>
            ))}
          </ul>
        </div>
        <Modal
          title="Add To-Do"
          open={this.state.isModalOpenE}
          onCancel={this.handleCancel}
          footer={[null]}
        >
          <form className="flex flex-col gap-[10px]" onSubmit={this.edit}>
            <Input
              placeholder="Enter to-do name"
              name="name"
              defaultValue={this.state.edit.name}
            />
            <Input
              placeholder="Enter to-do description"
              name="description"
              defaultValue={this.state.edit.description}
            />
            <Button type="primary" htmlType="submit">
              Save
            </Button>
            <Button onClick={this.handleCancelE}>Cancel</Button>
          </form>
        </Modal>
        <Modal
          title="Add To-Do"
          open={this.state.isModalOpen}
          onCancel={this.handleCancel}
          footer={[null]}
        >
          <form className="flex flex-col gap-[10px]" onSubmit={this.add}>
            <Input placeholder="Enter to-do name" name="name" />
            <Input placeholder="Enter to-do description" name="description" />
            <input type="file" name="img" />
            <Button type="primary" htmlType="submit">
              Save
            </Button>
            <Button onClick={this.handleCancel}>Cancel</Button>
          </form>
        </Modal>
       <Modal
          title="Add To-Do"
          open={this.state.isModalOpenI}
          onCancel={this.handleCancelI}
          footer={[null]}
        >
          <form className="flex flex-col gap-[10px]"  onSubmit={this.addImg}  >
            <input type="file" name="img" multiple />
            <Button type="primary" htmlType="submit">
              Save
            </Button>
            <Button onClick={this.handleCancelI}>Cancel</Button>
          </form>
        </Modal>
      </section>
    );
  }
}

export default Home;
