import './style.css';
import 'bootstrap/dist/js/bootstrap.bundle';
// import "bootstrap/dist/css/bootstrap.min.css";

class VirtualServicesPopup {
  constructor() {}

  async initialize() {
    const container = document.createElement('div');
    container.setAttribute("id", "vs-popup");

    document.body.appendChild(container);
    this.createPopupContent();
  }

  createPopupContent() {
    document.querySelector<HTMLDivElement>('#vs-popup')!.innerHTML = /*html*/`
      <div>
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
        Launch demo modal
        </button>
    
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                ...
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

function initializePopup() {
  const popup = new VirtualServicesPopup();
  popup.initialize();
}

initializePopup();