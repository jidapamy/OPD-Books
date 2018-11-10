import swal from "sweetalert2";

export const confirmPopup = (text = null, title = null) => (
    swal({
        title: title ? title :'Are you sure?',
        text: !text ? "Please check that your information is correct and true." : text,
        type: 'warning',
        showCancelButton: true,
        cancelButtonColor: '#d33',
        confirmButtonColor: '#31A5BA',
        cancelButtonText: 'Cancel',
        confirmButtonText: 'Confirm',
        reverseButtons: true
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

export const successTXPopup = (text, arrtx, title = null) => {
    let inside = ''
    let header = `<span style="font-size:16px;">
        ${text}
        </span>
        <br><br>
        <fieldset style="border-radius: 10px;border: 1px solid #31A5BA;text-align: left;"> 
            <legend style="text-align: center; ">Transaction hash</legend>`
    let footer = '</fieldset>'
    arrtx.map((data, index) => {
        inside += '<span style="font-size:10px;text-align: left">' + '[' + index + '] : ' + data + '</span><br>'
    })
    console.log("successTXPopup")
    return swal({
        title: !title ? 'Successful' : title,
        text: text,
        type: 'success',
        showConfirmButton: false,
        showCloseButton: true,
        html: header + inside + footer,
    })
}

