import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import './Style.css'

const Contacto = () => {
  return (
    <>
      <p className="title-p">Cuentanos, ¿en que podemos ayudarte?</p>
      <Form className="frm">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="lbl-correo">Correo</Form.Label>
          <Form.Control className="inp-correo" type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="lbl-desc">Example textarea</Form.Label>
          <Form.Control className="txt-area" as="textarea" rows={3} />
        </Form.Group>
        <Button className="btn" variant="danger" type="submit">
          Enviar
        </Button>
      </Form>
    </>
  );
};

export default Contacto;
