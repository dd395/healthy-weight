$(document).ready(
    function() {

//get modal element
        var modal = document.getElementById("simpleModal");
//get open modal button
        var modalBtn = document.getElementById("modalBtn");
//get close button
        var closeBtn = document.getElementsByClassName("closeBtn")[0];
//Listen for to open click
        modalBtn.addEventListener("click", openModal);
//Listen for to close click
        closeBtn.addEventListener("click", closeModal);
//Listen for outside click
        window.addEventListener("click", outsideClick);


//Create function to open modal
        function openModal(event) {
            event.preventDefault();
            modal.style.display = "block";
        }

//Create function to close modal
        function closeModal() {
            modal.style.display = "none";
        }

//Create function to close modal if outside click
        function outsideClick(e) {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        }
    })