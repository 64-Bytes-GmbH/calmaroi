$(document).ready(function () {
    let file; // Declare the file variable
    let xhr; // Declare the xhr variable

    // Initialize the Flowbite modal
    const modalElement = document.getElementById('uploadExtra-modal');
    const modalOptions = {
        placement: 'center',
        backdrop: 'dynamic',
        backdropClasses: 'bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40',
        closable: true,
        onHide: () => {
            console.log('modal is hidden');
            removeBackdrop();
        },
        onShow: () => {
            console.log('modal is shown');
        },
        onToggle: () => {
            console.log('modal has been toggled');
        },
    };
    const modal = new Modal(modalElement, modalOptions);

    function hideModal() {
        $('#education-form')[0].reset();
        modal.hide();
    }

    function removeBackdrop() {
        $('div[modal-backdrop]').remove();
    }

    // Ensure modal shows correctly on button click
    $('#upload-extra-file').on('click', function() {
        modal.show();
    });

    // Ensure modal hides correctly on close button click
    $('[data-modal-hide="uploadExtra-modal"]').on('click', function() {
        hideModal();
    });

    // Listen for file input change to update the file variable
    $('#file_to_upload').on('change', function (event) {
        file = event.target.files[0]; // Assign the selected file to the variable
    });

    $('form#education-form').on('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Get the input values
        const description = $('#education-form-filedescription').val();

        if (!file) {
            alert('Bitte wählen Sie eine Datei aus.');
            return;
        }

        const filename = file.name;
        const filesize = (file.size / (1024 * 1024)).toFixed(1) + ' MB';

        // Validate the inputs (basic validation)
        if (!description || !file) {
            alert('Bitte füllen Sie alle Felder aus.');
            return;
        }

     // Create a container for the description and progress bar
     const progressContainer = $('<div class="mb-4"></div>');

     // Create a description and percentage container with a cancel button
     const descriptionText = $(`
         <div class="flex justify-between mb-1">
             <div>
                 <span class="text-base font-medium text-blue-700 dark:text-white">${filename}</span>
                 <span class="text-sm text-gray-500 dark:text-gray-400 block">${filesize}</span>
             </div>                
             <div class="flex items-center">
                 <span class="percentage-text text-sm font-medium text-blue-700 dark:text-white mr-2">0%</span>
                 <button class="cancel-upload bg-transparent border-none cursor-pointer">
                     <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                         <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm7.707-3.707a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0-1.414-1.414L12 10.586 9.707 8.293Z" clip-rule="evenodd"/>
                     </svg>
                 </button>
                 <div class="complete-upload bg-transparent border-none ">
                     <svg class="w-6 h-6 text-green-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                         <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z" clip-rule="evenodd"/>
                     </svg>
                 </div>
             </div>
         </div>
     `);

     // Create a progress bar element using Tailwind CSS and Flowbite classes
     const progressBar = $(`
         <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
             <div class="bg-blue-600 h-2.5 rounded-full" style="width: 0%"></div>
         </div>
     `);

        // Append the description and progress bar to the container
        progressContainer.append(descriptionText, progressBar);

        // Add the container to the progress-container div
        $('#progress-container').append(progressContainer);

        // Hide modal and show progress bar
        hideModal();

        // Create form data
        const formData = new FormData();
        formData.append('description', description);
        formData.append('file', file);

        // Send AJAX request
        xhr = $.ajax({
            url: '/add-education/',
            type: 'POST',
            data: formData,
            contentType: false,
            processData: false,
            xhr: function () {
                const customXhr = new window.XMLHttpRequest();
                // Upload progress event
                customXhr.upload.addEventListener("progress", function (evt) {
                    descriptionText.find('.complete-upload').hide();
                    if (evt.lengthComputable) {
                        const percentComplete = evt.loaded / evt.total * 100;
                        progressBar.find('.bg-blue-600').css('width', percentComplete + '%');
                        descriptionText.find('.percentage-text').text(Math.round(percentComplete) + '%');

                        // Remove progress bar when upload is complete
                        if (percentComplete === 100) {
                            progressBar.remove();
                            descriptionText.find('.percentage-text').hide();
                            descriptionText.find('.cancel-upload').hide();
                            // Show the complete upload button
                            descriptionText.find('.complete-upload').show();
                        }
                    }
                }, false);
                return customXhr;
            },
            success: function (data) {
                if (data.status === 'success') {
                    // Close the modal
                    hideModal();
                } else {
                    alert('Es gab einen Fehler beim Hinzufügen der Daten.');
                }
            },
            error: function (error) {
                console.error('Error:', error);
            }
        });

        // Add click event for the cancel button
        progressContainer.find('.cancel-upload').on('click', function () {
            xhr.abort(); // Cancel the upload
            progressContainer.remove(); // Remove the progress container
        });
    });

    // Hide dropdowns when clicking outside
    $(document).on('click', function (event) {
        if (!$(event.target).closest('[data-dropdown-toggle]').length && !$(event.target).closest('[id^="dropdown-"]').length) {
            $('[id^="dropdown-"]').hide();
        }
    });
});
