const getProjects = () => {
    $.get('/api/projects', (response) => {
        if (response.statusCode == 200) {
            addCards(response.data);
        }
    })
}
const clickMe = () => {
    alert("Thanks for clicking me. Hope you have a nice day!");
    $('#modal1').modal('open'); // Open the modal after the alert
    }
    const submitForm = () => {
        let formData = {
            first_name: $('#first_name').val(),
            last_name: $('#last_name').val(),
            password: $('#password').val(),
            email: $('#email').val()
        };
        console.log("Form Data Submitted: ", formData);
    };
$(document).ready(function () {
    $('.materialboxed').materialbox();
    $('#formSubmit').click(() => {
        submitForm();
    })
    getProjects();
    $('.modal').modal();
});
