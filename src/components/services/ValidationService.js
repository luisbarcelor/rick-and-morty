export function validate(validationElementId, searchTerm){
    const searchWarning = document.getElementById(validationElementId);
    let status= false

    if (searchTerm === "") {
        searchWarning.classList.add("visible-element")
    } else {
        searchWarning.classList.remove("visible-element")
        status = true;
    }

    return status;
}