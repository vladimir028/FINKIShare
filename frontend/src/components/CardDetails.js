import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react';
import re  from './CardComponent'

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {/*{props.subject['Наслов на наставниот предмет'].replace('\n', ' / ')}*/}
                    {props.subject['subjectTitle'].replace('\n', ' / ')}

                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/*<h4>Centered Modal</h4>*/}
                {}
                <h4>{props.subject['code']}</h4>
                {/*<p>Студис програма: </p>*/}
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

function CardDetails(props) {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <Button variant="primary" onClick={() => setModalShow(true)}>
                Детали
            </Button>

            <MyVerticallyCenteredModal
                subject = {props.subject}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}

export default CardDetails;