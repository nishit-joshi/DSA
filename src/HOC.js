const HOCAuthenticated = (WrappedComponenet) => {
  return (props) => {
    const history = useHistory()
    let isAutheticated = true

    if (!isAutheticated) {
      history.push("/login")
    }

    return <WrappedComponenet {...props} />
  }
}

const Dashboard = () => {
  return (
    <>
      <div>
        <h2>Welcome Home !!</h2>
      </div>
    </>
  )
}


const EnhancedCompo = HOCAuthenticated(Dashboard)
