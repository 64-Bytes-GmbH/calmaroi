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
                <div id="dropdown-${rowIndex}" class="hidden absolute z-20 top-full right-0 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                  <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenu-">
                    <li>
                      <div class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</div>
                    </li>
                    <li>
                       <div class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Delete</div> 
                    </li>
                  </ul>
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
      error: function (error) {
        console.error('Error:', error);
      }
    });
  });

  // Attach event handler using event delegation for dynamically added dropdown buttons
  $(document).on('click', '[data-dropdown-toggle]', function() {
    // Get the ID of the dropdown menu
    const dropdownId = $(this).attr('data-dropdown-toggle');

    // Toggle the visibility of the dropdown menu
    $('#' + dropdownId).toggle();
  });
});

$(document).on('click', '.edit-education-button', function () {
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
});
