const discountPrice = (price, discount) => {
    return (price * ((100 - discount) /100))
}

export default discountPrice