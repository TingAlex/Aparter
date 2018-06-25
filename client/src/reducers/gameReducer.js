const gameReducer = (state = null, action) => {
  switch (action.type) {
    case "FETCH_PICS":
      console.log("fetch pics " + JSON.stringify(action.payload.picList));
      // console.log(JSON.stringify(action.payload.playList[0]));
      if (state && state.picName) {
        return { ...state, ...action.payload, picName: state.picName };
      } else {
        return {
          ...action.payload,
          picName: action.payload.picList[0].picName,
          arrange: [0, 1, 2, 3, 4, 5, 6, 7, 8],
          hideIndex: 8,
          stop: true
        };
      }
    case "SET_PLAYPIC":
      const arrange = [0, 1, 2, 3, 4, 5, 6, 7, 8];
      return {
        ...state,
        ...action.payload,
        arrange: arrange,
        hideIndex: 8,
        stop: true
      };
    case "READY_PLAY":
      if (true) {
        let readyArrange = new Array(100);
        let hideIndex = state.hideIndex;
        let nextArrange = state.arrange;
        let temp = 0;
        let flag = 0;
        for (let i = 0; i < 100; i++) {
          readyArrange[i] = Math.floor(Math.random() * 4);
          flag = 0;
          switch (readyArrange[i]) {
            case 0:
              //up
              if (hideIndex - 3 >= 0) {
                flag = -3;
              }
              break;
            case 1:
              //down
              if (hideIndex + 3 <= 8) {
                flag = 3;
              }
              break;
            case 2:
              //left
              if (hideIndex % 3 !== 0) {
                flag = -1;
              }
              break;
            case 3:
              //right
              if (hideIndex % 3 !== 2) {
                flag = 1;
              }
              break;
          }
          if (flag !== 0) {
            temp = nextArrange[hideIndex];
            nextArrange[hideIndex] = nextArrange[hideIndex + flag];
            nextArrange[hideIndex + flag] = temp;
            hideIndex = hideIndex + flag;
          }
        }
        console.log("random move: " + readyArrange);

        return { ...state, stop: false, arrange: nextArrange, hideIndex };
      }

    case "MOVE_PIC":
      if (true) {
        if (state.stop) {
          return state;
        }
        let index = action.payload.index;
        let temp = 0;
        let nextArrange = state.arrange;
        let hideIndex = state.hideIndex;
        switch (state.hideIndex) {
          case index + 1:
            break;
          case index - 1:
            break;
          case index + 3:
            break;
          case index - 3:
            break;
          default:
            return state;
        }
        temp = nextArrange[state.hideIndex];
        nextArrange[state.hideIndex] = nextArrange[index];
        nextArrange[index] = temp;
        hideIndex = index;
        return { ...state, arrange: nextArrange, hideIndex: hideIndex };
      }

    default:
      return state;
  }
};

export default gameReducer;
