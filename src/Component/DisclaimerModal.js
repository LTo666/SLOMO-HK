import { useState } from "react"
import { Button, Modal } from "react-daisyui"

function DisclaimerModal() {
  const [visible, setVisible] = useState(true)
  const closeModal = () => setVisible(false)

  return (
    <Modal open={visible}>
      <Modal.Header className="font-bold">Disclaimer</Modal.Header>

      <Modal.Body>
        All images and content displayed on this website have been found online and are being used
        solely for the purpose of display. None of the images or content on this website are
        intended for commercial use, and they remain the property of their respective owners. We do
        not claim any ownership or rights to any of the images or content used on this website. If
        you are the owner of any of the images or content used on this website and wish to have it
        removed, please contact us immediately and we will be happy to comply with your request.
      </Modal.Body>

      <Modal.Actions>
        <Button onClick={closeModal}>OK</Button>
      </Modal.Actions>
    </Modal>
  )
}

export default DisclaimerModal
