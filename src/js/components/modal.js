export default class Modal {
    constructor() {
        this.openModal();
        this.closeModal();
    }
    openModal() {
        $(document).on('click', '.myModal__btn', e => {
            const $id = $(e.currentTarget).data('for');
            const $target = $(`#${$id}`);
            if ($target.length) $(`#${$id}`).show();
        });
    }
    closeModal() {
        $(document).on('click', '.myModal__close', e => {
            $(e.currentTarget).closest('.myModal').hide();
        });
    }
}