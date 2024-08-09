const ItemDetailContainer = () => {
    const [product, setProduct] = useState();
    const { id } = useParams();
  
    console.log(id)
    useEffect(() => {
  
  
      getProductById(id)
        .then((res) => {
          setProduct(res)
        })
        .catch((err) => {
          console.log(err)
        })
  
    }, [id])
    return (
      <div>
        <ItemDetail {...product} />
      </div>
    )
  }