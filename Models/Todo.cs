using Newtonsoft.Json;

namespace Digiturk.Intern.ToDoList2.WebApp.Models
{
    public class Todo
    {
        [JsonProperty("Task_No")]
        public int Id { get; set; }

        [JsonProperty("Task_Name")]
        public string TaskName { get; set; }

        [JsonProperty("Description")]
        public string Description { get; set; }

        [JsonProperty("Created_Date")]
        public string CreatedDate { get; set; }
    }
}