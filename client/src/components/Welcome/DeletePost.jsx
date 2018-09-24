

deletePost (postId) {
  request
    .delete(`/api/v1/posts/${this.props.post.id}`)
    .then(res => {
      console.log('success')
      this.setState({
        delete: true
      })
    })
    .catch(console.error)
}