import { Alert } from "react-native";
import { api } from "../axios";

export const handleOraculo =
  ({ form, clear, setLoading }) =>
  async () => {
    setLoading(true);

    const { msg, response } = await api.POST("/oraculo", form);

    if (msg === "OK") {
      Alert.alert("Resultados", `${response}`);
    }

    clear();
    setLoading(false);
  };
