import React from 'react';

function AppView(props) {
    return (
        <div>
            <Header {...props} />
            <Main {...props} />
            <Footer{...props} />
        </div>
    );
}

function Header(props) {
    return (
        <header id="header">
            <h1>todos</h1>
            <input id="new-todo" placeholder="What needs to be done?"/>
        </header>
    );
}

function Main(props) {
    return (
        <section id="main">
            <ul id="todo-list">
                <li>
                    <div className="view">
                        <input className="toggle" type="checkbox" />
                        <label htmlFor="">
                            こんにちは
                        </label>
                    </div>
                </li>
                <li>
                    <div className="view">
                        <input className="toggle" type="checkbox" />
                        <label htmlFor="">
                            こんにちは
                        </label>
                    </div>
                </li>
                <li>
                    <div className="view">
                        <input className="toggle" type="checkbox" />
                        <label htmlFor="">
                            こんにちは
                        </label>
                    </div>
                </li>
            </ul>
        </section>
    );
}

function Footer(props) {
    return (
        <footer id="footer">
            <span id="todo-count">
                <strong>
                    3
                </strong>
                 items left
            </span>
            <button id="clear-completed">
                Clear Completed (2)
            </button>
        </footer>
    );
}
export default AppView;