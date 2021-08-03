export const store = {
  _state: {
    profilePage: {
      posts: [{id: 1, message: 'Some message', likeCount: 12}]
    },
    dialogPage: {
      messages: [{id: 1, messageText: 'Some message'}],
      dialogs: [{id: 1, dialogUser: 'Danil'}]
    }
  },
  getState () {
    return this._state
  },
  addPost (message) {
    const newPost = {
      id: 5,
      message,
      likeCount: 0
    }
    this._state.profilePage.posts.push(newPost)
    this._callSubscriber(this._state)
  },
  _callSubscriber () {},
  subscriber (observer) {
    this._callSubscriber = observer
  }
}
