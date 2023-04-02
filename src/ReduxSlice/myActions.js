export const callFirebaseFn = () => {
  console.log("call this__1");

  return  () => {
    console.log("call this__2");

    const getEmail = async () => {
      try {
        const response = await fetch(
          "https://foodparadisereactapp-default-rtdb.firebaseio.com/UserFoodCart.json"
        );
        const data = await response.json();
        console.log("data_", data);
        //   return data;
        // const fireData = await getEmail();
        console.log("fireData__", fireData);

        //   Dispatch(apiActions.myFoodGet(fireData));
      } catch (error) {
        console.log("error occur", error);
      }
    };
  };
};
