document.getElementById('education-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the input values
    const abschluss = document.getElementById('abschluss').value;
    const institution = document.getElementById('institution').value;
    const startDate = document.querySelector('input[name="start"]').value;
    const endDate = document.querySelector('input[name="end"]').value;

    // Validate the inputs (basic validation)
    if (!abschluss || !institution || !startDate || !endDate) {
        alert('Bitte füllen Sie alle Felder aus.');
        return;
    }

    // Create a new table row
    const newRow = document.createElement('tr');

    // Add the new row's cells
    newRow.innerHTML = `
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${abschluss}</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${institution}</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${startDate} - ${endDate}</td>
        <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
            <!--  Add edit and delete button -->
            <div class="flex justify-end px-4 pt-4">
                <button class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                    <span class="sr-only">Open dropdown</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                        <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                    </svg>
                </button>
                <!-- Dropdown menu -->
                <div class="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                    <ul class="py-2">
                        <li>
                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Bearbeiten</a>
                        </li>
                        <li>
                            <a href="#" class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Löschen</a>
                        </li>
                    </ul>
                </div>
            </div>
        </td>
    `;

    // Append the new row to the table body
    document.getElementById('education-tbody').appendChild(newRow);

    // Close the modal
    document.querySelector('[data-modal-hide="authentication-modal"]').click();

    // Clear the form
    document.getElementById('education-form').reset();
});
