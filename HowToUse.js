import React from 'react';
import ModalUtil from "./Util";

// const content = "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.";

// const openModal = () => {
//     ModalUtil.open(content, {
//         title: "React Modal",
//         maxWidth: 600,
//         header: true,
//         footer: true

//     });
// }

// const successContent = "your data has been saved";
// const successModal = () => {
//     ModalUtil.success(successContent, null , {
//         title: "React Modal",
//         maxWidth: 600,
//         header: true,
//         footer: true

//     });
// }

// const confirmContent = "your confirmation has been saved";
// const cnfirmModal = () => {
//     ModalUtil.confirm(confirmContent, null, null , {
//         title: "React Modal",
//         maxWidth: 600,
//         header: true,
//         footer: true

//     });
// }

const error = "your confirmation has been saved";
const errorModal = () => {
    ModalUtil.error(error, null, {
        title: "React Modal",
        maxWidth: 600,
        header: true,
        footer: true

    });
}

function HowToUse() {

    return (
        <div>
            <div onClick={() => { errorModal() }}>click</div>
        </div>
    );

}

export default HowToUse;
