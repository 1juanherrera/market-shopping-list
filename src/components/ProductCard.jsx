

function ProductCard({ productData }) {
    const { productName, quantity, type, img, added } = productData

    let componentClassName = 'product-card'
    let checklist = 'check'

    switch(type){
      case 'dairy':
        componentClassName += ' bg-yellow'
        break;
      case 'vegetablesandfruits':
        componentClassName += ' bg-green'
        break;
      case 'meat':
        componentClassName += ' bg-red'
        break;
      case 'candy':
        componentClassName += ' bg-pink'
        break;
      case 'cleaning':
        componentClassName += ' bg-blue'
        break;
        default:
          break;
    }

    switch(added){
      case false:
        checklist += ' false'
        break;
      case true:
        checklist += ' true'
        break;
        default:
          break;
    }

    return (
      <div className={componentClassName}>
        <ul>
          <h2>{productName}</h2>
          <li> <span>Quantity:</span> {quantity}</li>
          <li><span>Type:</span> {type}</li>
        </ul>
        <img className="imgs" src={`/src/assets/${img}`} alt="" />
        <img className={checklist} src="/src/assets/check.png" alt="" />
      </div>
    )
}

export default ProductCard
