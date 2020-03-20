import M from 'materialize-css';


const PopUp = {
  exibeMensagem: (status, msg) => {
    if (status === "success")
      M.toast({ html: msg, classes: "green rounded ", displayLength: 2000 })


    if (status === "error")
      M.toast({ html: msg, classes: "red rounded", displayLength: 2000 })

    if (status === "remove")
      M.toast({ html: msg, classes: "orange rounded", displayLength: 2000 })

  }
}
export default PopUp;