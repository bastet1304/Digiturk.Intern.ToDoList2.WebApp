
$(document).ready(function () {
    getToDoList();
});

function getToDoList() {
    $.ajax({
        url: '/Todo/GetTodos',
        type: 'GET',
        dataType: 'json',
        success: function (todolist)
        {
            todoListSuccess(todolist)
            console.log(todolist);
        }
    });
}
function todoListSuccess(todoList) {
    $.each(todoList, function (index, todoListItem) {
        ItemAddRow(todoListItem);
    });
}

function ItemAddRow(todoListItem) {
    if ($("#ListTable tbody").length == 0) {
        $("#ListTable").append("<tbody></tbody>");
    }
    $("#ListTable tbody").append(
        ItemBuildTableRow(todoListItem) );
}

function ItemBuildTableRow(todoListItem) {
    var taskno = todoListItem.Task_No;
    var newRow = "<tr class='newaddedrow glass'>" +
        "<td class='input-taskName'>" + todoListItem.Task_No + "</td>" +
        "<td class='input-taskName' type='text'>" + todoListItem.Task_Name + "</td>" +
        "<td class='input-description'  type='text'>" + todoListItem.Description + "</td>" +
        "<td class='input-createdDate' type='text'>" + todoListItem.Created_Date + "</td>" +
        "<td style='width:fit-content;'>" +
        "<button type='button' class='button' onclick='document.location=GetUrl(" + taskno + ")'> Update </button>" +
        "<button type='button' class='button' onclick='deleteTask(" + taskno + ")' style='--c: #e698bf;padding-left: .8em; padding-right: .8em;'> Delete </button>" +
        "</td>" +
        "</tr>";

        return newRow;
}

function GetUrl(taskno) {
    console.log(taskno);
    return '/Todo/Update/' + taskno;
}

function deleteTask(taskno) {
    $.ajax({
        url: "/Todo/Delete/" + taskno,
        contentType: "application/json",
        type: "DELETE",
        datatype: "JSON",
        success: function (data) {
            if (data.isSuccess) {
                window.location = "/Todo/Index"
            }
        }
    })
}
