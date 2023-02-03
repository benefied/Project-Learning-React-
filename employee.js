function Employee(props) {
    return React.createElement('li', {className: employee}, 
    React.createElement('div', null, 
        React.createElement('b', null, props.name),
        React.createElement('b', null, props.gender),
        )
    )
}

function EmployeeList(props){
    const employeeList = props.employee;
    let listedEmployee = employeeList.map(e => {
        return React.createElement(Employee,{
            key: e.id,
            name: e.name,
            gender: e.gender
        })
    })
    return React.createElement('ul', {className: employeeList}, listedEmployee);
}

const employees = [
    {id: 1, name: 'ben', gender: 'male'},
    {id: 2, name: 'jane', gender: 'female'},
    {id: 3, name: 'gabs', gender: 'male'}
]

const Element = React.createElement(EmployeeList, {employee: employees});

ReactDOM.render(Element, document.getElementById('root'));
