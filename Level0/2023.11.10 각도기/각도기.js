function solution(angle) {
  if(angle > 0 && angle < 90) {
      return 1
  } else if(angle === 90) {
      return 2
  } else if(angle > 90 && angle < 180) {
      return 3
  } else {
      return 4
  }
}

solution(70);
solution(91);
solution(180);