import './Sidebar.css';


const Sidebar = () =>{
    return (
        <nav class="navbar navbar-light bg-light">
        <form class="form-inline">
            <button class="btn btn-outline-success" type="button">Botão principal</button>
            <button class="btn btn-sm btn-outline-secondary" type="button">Botão menor</button>
        </form>
        </nav>
    )
}

export default Sidebar;