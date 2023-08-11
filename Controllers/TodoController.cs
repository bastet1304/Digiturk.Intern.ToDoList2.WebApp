using Digiturk.Intern.ToDoList2.WebApp.Models;
using Microsoft.AspNetCore.Mvc;

namespace Digiturk.Intern.ToDoList2.WebApp.Controllers
{
    public class TodoController : Controller
    {
        private static List<Todo> _todoList = new List<Todo>()
        {
            new Todo()
            {
                Id = 1,
                TaskName = "Test",
                Description = "Test",
                CreatedDate = DateTime.Now.ToShortDateString()
            }
        };

        public bool IsSuccess { get; private set; }

        [HttpGet]
        public IActionResult Index()
        {
            return View("ToDoList");
        }


        [HttpGet]
        public JsonResult GetTodos()
        {
            return Json(_todoList.OrderBy(x => x.Id));
        }

        [HttpGet]
        public IActionResult Create()
        {
            return View();
        }

        [HttpPost]
        public JsonResult Create([FromBody] Todo todo)
        {
            var id = 1;
            if (_todoList.Any())
            {
                id = _todoList.OrderBy(x => x.Id).LastOrDefault().Id;
            }

            _todoList.Add(new Todo()
            {
                TaskName = todo.TaskName,
                Description = todo.Description,
                CreatedDate = DateTime.Now.ToShortDateString(),
                Id = id + 1
            });

            return Json(new { IsSuccess = true });
        }

        [HttpGet("Todo/Update/{id}")]
        public IActionResult Update(int id)
        {
            var todo = _todoList.Where(x => x.Id == id).FirstOrDefault();
            return View(todo);
        }

        [HttpPut]
        public JsonResult Update([FromBody] Todo todo)
        {
            todo.CreatedDate = DateTime.Now.ToShortDateString();
            _todoList.Remove(_todoList.Where(x => x.Id == todo.Id).FirstOrDefault());
            _todoList.Add(todo);

            return Json(new { IsSuccess = true });
        }
        [HttpDelete]
        public JsonResult Delete(int id)
        {
            _todoList.Remove(_todoList.Where(x => x.Id == id).FirstOrDefault());
            return Json(new { IsSuccess = true });
        }

    }
}