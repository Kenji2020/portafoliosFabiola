import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
export const Modalcito = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
      <>
<Button variant="danger" onClick={handleShow}>
        Sobre mí
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >                              
        <Modal.Header closeButton>
          <Modal.Title>Sobre mí</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        Mis proyectos fueron elaborados e ideados mediante el uso de la creatividad en conjunto de la experiencia con el cliente, tomando en cuenta su voz y alzándola hasta lo más alto. He trabajado como community manager de la pyme Delicias Caseras Pía y del cantante Trynda, siendo también parte del grupo de comunicaciones comunal y de salud mental para el presidente.
        Mis ambiciones van dirigidas hacia las nuevas aventuras y el goce de experiencias fructíferas. Soy una persona arriesgada y preparada para cualquier proyecto o idea que tengas en mente.
        Si necesitas una buena community manager, redactora o simplemente una excelente publicista, ¡aquí te dejo mi contacto!
        <br/>
        Contacto:
        <br/>

        Fabiola Águila Manríquez
        <br/>

        fabiola.aguila@usach.cl 
        <br/>

        +56944076501
        <br/>

        behance.net/fabiolaguila
        <br/>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    )
}
