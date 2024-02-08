export default function listUsersInView(users, positionX, positionY, screenWidth, screenHeight) {
  let usersInView = [];

  console.log(users, positionX, positionY, screenWidth, screenHeight);

  // WRITE SOLUTION BELOW. ADD USERNAME AND IS_BROADCASTER TO 'usersInView' IF USER FALLS INTO VISIBLE RANGE

  // Avatar center is used to determine if the user is in view
  const avatarheight = 125 / 2;
  const avatarwidth = 50 / 2;

  // Use Object.values to get an array of all users passed
  usersInView = Object.values(users).filter(user => {
    const avatarCenterX = user.x + avatarwidth;
    const avatarCenterY = user.y + avatarheight;

    return (
      avatarCenterX >= positionX &&
      avatarCenterX <= positionX + screenWidth &&
      avatarCenterY >= positionY &&
      avatarCenterY <= positionY + screenHeight
    );
  })
    .sort((a, b) => { 
      const distanceA = Math.sqrt(Math.pow(a.x + avatarwidth - positionX, 2) + Math.pow(a.y + avatarheight - positionY, 2));
      const distanceB = Math.sqrt(Math.pow(b.x + avatarwidth - positionX, 2) + Math.pow(b.y + avatarheight - positionY, 2));

      return distanceA - distanceB;
    });

  usersInView = usersInView.map(user => {
    const distance = Math.sqrt(Math.pow(user.x + avatarwidth - positionX, 2) + Math.pow(user.y + avatarheight - positionY, 2)).toFixed(2);
    return {
      ...user,
      distance
    };
  });

  // END SOLUTION SECTION

  console.log(usersInView)

  return usersInView;
}
