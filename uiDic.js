class UI {
    constructor(){
        this.view = document.getElementById('viewData');
    }

    showData(data, word){
        this.view.innerHTML = `
        <div class="row entry-header>
            <div class="col-12">
                <h1><b>${word}</b></h1>                
            </div>
        </div>
        <br>
        <div class="dictionary-entry-1">
            <div class="row bg-header">
                <div class="col">
                    <h2><b>Definition of <i>${word}</i> :-</b></h2><br>
                    <h4><strong>${data[0].fl}</strong></h4>
                    <p>${data[0].hwi.hw}</p>
                    <p>${data[0].shortdef}</p>
                    <hr>

                    <h4><strong>${data[1].fl}</strong></h4>
                    <p>${data[1].hwi.hw}</p>
                    <p>${data[1].shortdef}</p>
                    <hr>

                    <h4><strong>${data[2].fl}</strong></h4>
                    <p>${data[2].hwi.hw}</p>
                    <p>${data[2].shortdef}</p>
                    <hr>

                    <h4><strong>${data[3].fl}</strong></h4>
                    <p>${data[3].hwi.hw}</p>
                    <p>${data[3].shortdef}</p>
                    <hr>

                    <h4><strong>${data[4].fl}</strong></h4>
                    <p>${data[4].hwi.hw}</p>
                    <p>${data[4].shortdef}</p>
                    <hr>

                    <h4><strong>${data[5].fl}</strong></h4>
                    <p>${data[5].hwi.hw}</p>
                    <p>${data[5].shortdef}</p>
                    <hr>

                </div>
            </div>
        </div> 
        `;       
    }
}