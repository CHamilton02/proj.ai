import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  header = input<string>();
  body = input<string>();
  buttonText = input<string>();
  modalClosed = output<void>();

  closeModal() {
    this.modalClosed.emit();
  }
}
