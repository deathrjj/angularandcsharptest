using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace angulartest.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TodoController : ControllerBase
    {
        private static readonly List<Todo> Todos = new List<Todo>();

        [HttpGet]
        public List<Todo> GetTodos() => Todos;

        [HttpPost]
        public IActionResult AddTodo([FromBody] Todo todo)
        {
            Todos.Add(todo);
            return Ok();
        }

        [HttpDelete("{index}")]
        public IActionResult DeleteTodo([FromRoute] int index)
        {
            Todos.RemoveAt(index);
            return Ok();
        }

        [HttpPost("edit/{index}")]
        public IActionResult EditTodo([FromRoute] int index, [FromBody] Todo todo)
        {
            Todos[index] = todo;
            return Ok();
        }
    }

    public class Todo
    {
        public string Value { get; set; }
        public bool EditMode { get; set; }
    }
}
