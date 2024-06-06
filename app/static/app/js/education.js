import { Dropdown } from 'flowbite';
const { Dropdown } = require("flowbite");

// jQuery ready function to ensure the DOM is fully loaded
$(document).ready(function() {
   

    $('#education-form').on('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get the input values
        const id = $('input[name="id"]', '#education-form').val();
        const abschluss = $('select[name="abschluss"]', '#education-form').val();
        const institution = $('input[name="institution"]', '#education-form').val();
        const startDate = $('input[name="start"]', '#education-form').val();
        const endDate = $('input[name="end"]', '#education-form').val();


        // Validate the inputs (basic validation)
        if (!abschluss || !institution || !startDate || !endDate) {
            alert('Bitte füllen Sie alle Felder aus.');
            return;
        }

        // Create form data
        const formData = new FormData();
        formData.append('addEducation', 'addEducation');
        formData.append('id', id);
        formData.append('abschluss', abschluss);
        formData.append('institution', institution);
        formData.append('start_date', startDate);
        formData.append('end_date', endDate);

        console.log(formData)

        // Send AJAX request
        $.ajax({
            url: '/add-education/',
            type: 'POST',
            data: formData,
            contentType: false,
            processData: false,
           
            success: function(data) {
                if (data.status === 'success') {
                    // Create a new table row
                    const newRow = $(`
                        <tr data-id="${data.data.id}">
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${data.data.abschluss}</td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${data.data.institution}</td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${data.data.start_date} - ${data.data.end_date}</td>
                            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                               
                            
                            <!--  Add edit and delete button -->
                                <div class="flex justify-end px-4 pt-4">
                                <button id="dropdownButton-${data.data.id}" data-dropdown-toggle="dropdown-${data.data.id}" class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button"> 
                                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                                  <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                                </svg>
                              </button>
                              
                              <!-- Dropdown menu -->
                              <div id="dropdown-${data.data.id}" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                  <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconHorizontalButton">
                                    <li>
                                      <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                    </li>
                                    <li>
                                      <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                    </li>
                                    <li>
                                      <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                    </li>
                                  </ul>
                                  <div class="py-2">
                                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Separated link</a>
                                  </div>
                              </div>
                                </div>
                            </td>
                        </tr>
                    `);

                    // Append the new row to the table body
                    $('#education-tbody').append(newRow);

                    // Close the modal
                    $('[data-modal-hide="authentication-modal"]').click();

                    // Clear the form
                    $('#education-form')[0].reset();
                } else {
                    alert('Es gab einen Fehler beim Hinzufügen der Daten.');
                }
            },
            error: function(error) {
                console.error('Error:', error);
            }
        });
    });
});

$(document).on('click', '.edit-education-button', function() {
    const row = $(this).closest('tr');
    const id = row.data('id');
    const abschluss = row.find('td:eq(0)').text();
    const institution = row.find('td:eq(1)').text();
    const startDate = row.find('td:eq(2)').text().split(' - ')[0];
    const endDate = row.find('td:eq(2)').text().split(' - ')[1];

    $('#edit-education-form input[name="id"]').val(id);
    $('#edit-education-form input[name="abschluss"]').val(abschluss);
    $('#edit-education-form input[name="institution"]').val(institution);
    $('#edit-education-form input[name="start"]').val(startDate);
    $('#edit-education-form input[name="end"]').val(endDate);

    $('[data-modal-toggle="authentication-modal"]').click();
})
