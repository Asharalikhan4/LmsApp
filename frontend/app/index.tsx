import { FC } from "react";
import { Redirect } from "expo-router";

const index: FC = () => {
    return (
        <Redirect href={"/(routes)/onboarding"} />
    );
};

export default index;