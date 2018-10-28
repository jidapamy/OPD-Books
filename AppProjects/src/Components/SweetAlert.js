import swal from "sweetalert2";

export const confirmPopup = (text=null) => (
    swal({
        title: 'Are you sure?',
        text: !text ? "Please check that your information is correct and true." : text,
        type: 'warning',
        showCancelButton: true,
        cancelButtonColor: '#d33',
        confirmButtonColor: '#1FCB4A',
        confirmButtonText: 'Confirm',
        cancelButtonText: 'Cancel',
    })
)

export const errorPopup = (text,title=null) => (
    swal({
        type: "error",
        title: !title ? 'Incorrect' : title,
        text: text,
        showConfirmButton: false,
        showCloseButton: true,
    })
)

export const successPopup = (text, title = null) => (
    swal({
        title: !title ? 'Successful' : title,
        text: text,
        type: 'success',
        showConfirmButton: false,
        showCloseButton: true,
    })
)
