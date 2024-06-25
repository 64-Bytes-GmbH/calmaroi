// jQuery ready function to ensure the DOM is fully loaded
$(document).ready(function () {
  $('form#education-form').on('submit', function (event) {
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

    console.log(formData);

    // Send AJAX request
    $.ajax({
      url: '/add-education/',
      type: 'POST',
      data: formData,
      contentType: false,
      processData: false,
      success: function (data) {
        if (data.status === 'success') {
          // Calculate the index for the new row
          const rowIndex = $('#education-tbody tr').length;

          // Create a new table row
          const newRow = $(`
            <tr id="row-${rowIndex}" data-id="${data.data.id}">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${data.data.abschluss}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${data.data.institution}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${data.data.start_date} - ${data.data.end_date}</td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium relative">
                <!-- Add edit and delete button -->
                <button id="dropdownButton-${rowIndex}" data-dropdown-toggle="dropdown-${rowIndex}" class="inline-flex z-10 items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button"> 
                  <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                    <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                  </svg>
                </button>
                <!-- Dropdown menu -->
                <div id="dropdown-${rowIndex}" class="hidden absolute z-20 top-full right-0 bg-white divide-y divide-gray-100 rounded-lg shadow w-auto dark:bg-gray-700 dark:divide-gray-600">
                  <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenu-">
                    <li>
                      <button class="edit-education-button px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white flex items-center w-full">
                        <svg class="w-5 h-5 text-gray-800 dark:text-white mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.779 17.779 4.36 19.918 6.5 13.5m4.279 4.279 8.364-8.643a3.027 3.027 0 0 0-2.14-5.165 3.03 3.03 0 0 0-2.14.886L6.5 13.5m4.279 4.279L6.499 13.5m2.14 2.14 6.213-6.504M12.75 7.04 17 11.28"/>
                        </svg>
                        Edit
                      </button>
                    </li>
                    <li>
                      <button class="delete-education-button px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white flex items-center w-full">
                        <svg class="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                          <path fill-rule="evenodd" d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z" clip-rule="evenodd"/>
                        </svg>
                        Delete
                      </button> 
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
          `);

          // Append the new row to the table body
          $('#education-tbody').append(newRow);

          // Close the modal
          $('[data-modal-hide="bildung-modal"]').click();

          // Clear the form
          $('#education-form')[0].reset();
        } else {
          alert('Es gab einen Fehler beim Hinzufügen der Daten.');
        }
      },
      error: function (error) {
        console.error('Error:', error);
      }
    });
  });

  // Attach event handler using event delegation for dynamically added dropdown buttons
  $(document).on('click', '[data-dropdown-toggle]', function() {
    // Close any open dropdowns
    $('[id^="dropdown-"]').hide();

    // Get the ID of the dropdown menu
    const dropdownId = $(this).attr('data-dropdown-toggle');

    // Toggle the visibility of the dropdown menu
    $('#' + dropdownId).toggle();
  });

  $(document).on('click', '.delete-education-button', function () {
    const row = $(this).closest('tr');
    const id = row.data('id');

    //Aviii lösche das denn auch  
    row.remove();


    //Aviiiii remove the comment below and the closing bracket to enable delete functionality after implementing the database 
    // if (confirm('Sind Sie sicher, dass Sie diesen Datensatz löschen möchten?')) {
    //   $.ajax({
    //     url: '/delete-education/',
    //     type: 'POST',
    //     data: { id: id },
    //     success: function (data) {
    //       row.remove();
    //     },
    //     error: function (error) {
    //       console.error('Error:', error);
    //     }
    //   });
    // }
  });

  $(document).on('click', '.edit-education-button', function () {
    const row = $(this).closest('tr');
    const id = row.data('id');
    const abschluss = row.find('td:eq(0)').text();
    const institution = row.find('td:eq(1)').text();
    const dates = row.find('td:eq(2)').text().split(' - ');
    const startDate = dates[0];
    const endDate = dates[1];

    

    // Fill the form with the data from the row
    $('#education-form input[name="id"]').val(id);
    $('#education-form select[name="abschluss"]').val(abschluss);
    $('#education-form input[name="institution"]').val(institution);
    $('#education-form input[name="start"]').val(startDate);
    $('#education-form input[name="end"]').val(endDate);

    // Show the modal
    $('[data-modal-toggle="bildung-modal"]').click();
    //delete the row 
    $('.delete-education-button').trigger('click');
  });

  // Hide dropdowns when clicking outside
  $(document).on('click', function (event) {
    if (!$(event.target).closest('[data-dropdown-toggle]').length && !$(event.target).closest('[id^="dropdown-"]').length) {
      $('[id^="dropdown-"]').hide();
    }
  });
});
