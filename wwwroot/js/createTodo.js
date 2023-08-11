var TaskTodo = {
    Task_Name: "",
    Description: "",
}

function onaddtask() {
    TaskTodo.Task_Name = $("#taskName").val();
    TaskTodo.Description = $("#description").val();
    $.ajax({
        url: '/Todo/Create',
        contentType: "application/json",
        type: 'POST',
        datatype: "JSON",
        data: JSON.stringify(TaskTodo),
        success: function (data) {
            if (data.isSuccess) {
                window.location = "/Todo/Index"
            }
            
        }
    });
}
