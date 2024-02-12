$(document).ready(function() {
    // Code inside this block will execute when the DOM is fully loaded

    // Handle form submission
    $("#employeeForm").submit(function(event) {
        // Prevent the default form submission
        event.preventDefault();

        // Get form values
        var fullName = $("#fullName").val();
        var empCode = $("#empCode").val();
        var salary = $("#salary").val();
        var city = $("#city").val();

        // Check if all fields are filled
        if (fullName && empCode && salary && city) {
            // Create a new row with the form values
            var newRow = $("<tr><td>" + fullName + "</td><td>" + empCode + "</td><td>" + salary + "</td><td>" + city +
                          "</td><td><button class='editBtn'>Edit</button> <button class='deleteBtn'>Delete</button></td></tr>");

            // Append the new row to the table body
            $("#employeeTable tbody").append(newRow);

            // Clear the form fields
            $("#employeeForm")[0].reset();

            // Apply animation effect (fade in)
            newRow.hide().fadeIn(1000);
        } else {
            // If any field is empty, show an alert
            alert("Please fill in all fields.");
        }
    });

    // Handle edit button click
    $("#employeeTable").on("click", ".editBtn", function() {
        // Find the closest row to the clicked edit button
        var row = $(this).closest("tr");
        var columns = row.find("td");

        // Populate form fields with the data from the selected row
        $("#fullName").val(columns.eq(0).text());
        $("#empCode").val(columns.eq(1).text());
        $("#salary").val(columns.eq(2).text());
        $("#city").val(columns.eq(3).text());

        // Remove the row from the table
        row.fadeOut(500, function() {
            $(this).remove();
        });
    });

    // Handle delete button click
    $("#employeeTable").on("click", ".deleteBtn", function() {
        // Find the closest row to the clicked delete button and fade it out
        $(this).closest("tr").fadeOut(500, function() {
            // Remove the row from the table after the fade-out effect
            $(this).remove();
        });
    });
});
