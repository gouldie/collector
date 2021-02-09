import { Box, Modal, Image } from 'bumbag'
import Card from 'components/Card'
import FlipMove from 'react-flip-move'

export default function CardList ({ cards }) {
  const { modal } = Modal.useContext()

  const setModalSrc = (src) => {
    modal.setBaseId(src)
  }

  return (
    <Box style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
      gridGap: '1rem'
    }}>
        <FlipMove typeName={null} duration={300}>
          {
            cards.map((card, i) => (
              <Modal.Disclosure key={card.name}>
                <Card {...card} onClick={setModalSrc} />
              </Modal.Disclosure>
            ))
          }
        </FlipMove>

        <Modal>
          <Image src={modal.baseId} />
      </Modal>
    </Box>
  )
}
