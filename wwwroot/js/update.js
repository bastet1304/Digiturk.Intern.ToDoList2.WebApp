

function taskUpdate() {
    var todo = {};
    todo.Task_Name = $("#taskName").val();
    todo.Description = $("#description").val();
    todo.Task_No = $("#Id").val();
    $.ajax({
        url: "/Todo/Update/",
        contentType : "application/json",
        type : "PUT",
        datatype: "JSON",
        data: JSON.stringify(todo),
        success: function (data) {
            if (data.isSuccess) {
                window.location = "/Todo/Index"
            }
        }
    })

}