$(document).ready(function (){
    $('.edit-button').on('click',function() {
        var $task = $(this).closest('.task');
        $task.find('.progress').addClass('hidden');
        $task.find('.task-description').addClass('hidden');
        $task.find('.task-action').addClass('hidden');
        $task.find('.edit-task').removeClass('hidden');
    });

    $('.progress').on('click',function() {
        if ($(this).is(':checked')) {
            $(this).addClass('done');
        } else {
            $(this).removeClass('done');
        }
    });

});

// Em javascript puro

// document.addEventListener('DOMContentLoaded', function () {
//     var editButtons = document.querySelectorAll('.edit-button');
//     var progressCheckboxes = document.querySelectorAll('.progress');

//     editButtons.forEach(function (editButton) {
//         editButton.addEventListener('click', function () {
//             var task = this.closest('.task');
//             task.querySelector('.progress').classList.add('hidden');
//             task.querySelector('.task-description').classList.add('hidden');
//             task.querySelector('.task-action').classList.add('hidden');
//             task.querySelector('.edit-task').classList.remove('hidden');
//         });
//     });

//     progressCheckboxes.forEach(function (progressCheckbox) {
//         progressCheckbox.addEventListener('click', function () {
//             if (this.checked) {
//                 this.classList.add('done');
//             } else {
//                 this.classList.remove('done');
//             }
//         });
//     });
// });
