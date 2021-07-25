import { FunctionComponent } from 'react'
import { ImageType } from 'components/ImagePresenter/ImagePresenter'

type EmailTemplateProps = {
  getItemById: (
    sinkbowlId: string,
    faucetId: string | null,
    waterspoutId: string | null,
  ) => {
    sinkbowl: ImageType | undefined
    faucet: ImageType | undefined | null
    waterspout: ImageType | undefined | null
  }
  name: string
  phone: string
  address: string
  desc: string
  sinkbowlId: string
  faucetId: string | null
  waterspoutId: string | null
}

const TemplateWrapperStyle = {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  padding: '30px 0',
}

const EmailCardStyle = {
  width: '100%',
  maxWidth: '700px',
  padding: '30px',
  borderRadius: '10px',
  boxShadow: '0 0 7px rgba(64, 64, 64, 0.3)',
}

const TitleStyle = {
  marginBottom: '40px',
  fontSize: '1.5rem',
  fontWeight: 800,
  color: 'rgb(64, 64, 64)',
}

const InfoStyle = {
  box: {
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    gridTemplateRows: 'auto auto auto',
    gridGap: '15px',
    alignItems: 'center',
    padding: '15px 0',
  },
  name: {
    fontSize: '1rem',
    fontWeight: 700,
    color: 'rgb(64, 64, 64)',
    textAlign: 'center' as const,
  },
  value: {
    paddingLeft: '15px',
    fontSize: '1rem',
    fontWeight: 400,
    color: 'rgb(64, 64, 64)',
    borderLeft: '1px solid rgba(64, 64, 64, 0.5)',
    wordBreak: 'keep-all' as const,
  },
}

const LineStyle = {
  width: '100%',
  height: '1px',
  background: 'rgba(64, 64, 64, 0.5)',
  margin: '50px 0',
}

const SelectItemStyle = {
  box: {
    display: 'grid',
    gridTemplateRows: 'auto auto auto',
    gridGap: '20px',
  },
  name: {
    fontSize: '1.2rem',
    fontWeight: 700,
    color: 'rgb(64, 64, 64)',
  },
  value: {
    display: 'flex',
    alignItems: 'center',
  },
  img: {
    width: '30%',
    minWidth: '150px',
    marginRight: '20px',
  },
  imgInfo: {
    fontSize: '1.1rem',
    color: 'rgb(64, 64, 64)',
    lineHeight: '1.5',
  },
}

const NotSelectStyle = {
  fontSize: '1.2rem',
  fontWeight: 800,
  color: 'rgb(64, 64, 64)',
  textAlign: 'center' as const,
}

const EmailTemplate: FunctionComponent<EmailTemplateProps> = function ({
  getItemById,
  name,
  phone,
  address,
  desc,
  sinkbowlId,
  faucetId,
  waterspoutId,
}) {
  const { sinkbowl, faucet, waterspout } = getItemById(
    sinkbowlId,
    faucetId,
    waterspoutId,
  )

  return (
    <div style={TemplateWrapperStyle}>
      <div style={EmailCardStyle}>
        <div style={TitleStyle}>교체 의뢰</div>
        <div style={InfoStyle.box}>
          <div style={InfoStyle.name}>이름</div>
          <div style={InfoStyle.value}>{name}</div>
          <div style={InfoStyle.name}>전화번호</div>
          <div style={InfoStyle.value}>{phone}</div>
          <div style={InfoStyle.name}>주소</div>
          <div style={InfoStyle.value}>{address}</div>
          <div style={InfoStyle.name}>설명</div>
          <div style={InfoStyle.value}>{desc}</div>
        </div>
        <div style={LineStyle} />

        {sinkbowl !== undefined && (
          <div style={{ ...SelectItemStyle.box, marginBottom: '20px' }}>
            <div style={SelectItemStyle.name}>선택한 싱크볼</div>
            <div style={SelectItemStyle.value}>
              <img
                style={SelectItemStyle.img}
                src={sinkbowl.src}
                alt="sinkbowl"
              />
              <div style={SelectItemStyle.imgInfo}>
                <p>{sinkbowl.name}</p>
                <p>{sinkbowl.price}원</p>
                <a href={sinkbowl.link} target="_blank">
                  링크
                </a>
              </div>
            </div>
          </div>
        )}

        <div style={{ ...SelectItemStyle.box, marginBottom: '20px' }}>
          <div style={SelectItemStyle.name}>선택한 수전</div>
          {faucet !== undefined && faucet !== null ? (
            <div style={SelectItemStyle.value}>
              <img
                style={SelectItemStyle.img}
                src={faucet.src}
                alt="sinkbowl"
              />
              <div style={SelectItemStyle.imgInfo}>
                <p>{faucet.name}</p>
                <p>{faucet.price}원</p>
                <a href={faucet.link} target="_blank">
                  링크
                </a>
              </div>
            </div>
          ) : (
            <div style={NotSelectStyle}>선택안함</div>
          )}
        </div>

        <div style={SelectItemStyle.box}>
          <div style={SelectItemStyle.name}>선택한 배수구</div>
          {waterspout !== undefined && waterspout !== null ? (
            <div style={SelectItemStyle.value}>
              <img
                style={SelectItemStyle.img}
                src={waterspout.src}
                alt="sinkbowl"
              />
              <div style={SelectItemStyle.imgInfo}>
                <p>{waterspout.name}</p>
                <p>{waterspout.price}원</p>
                <a href={waterspout.link} target="_blank">
                  링크
                </a>
              </div>
            </div>
          ) : (
            <div style={NotSelectStyle}>선택안함</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default EmailTemplate
