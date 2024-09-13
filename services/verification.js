import { Alert } from "react-native";
import { api } from "../axios";

export const handleVerification =
  ({ form, setLoading, id }) =>
  async () => {
    setLoading(true);
    const { title, msg } = await api.POST(`/questionnaire/${id}`, {
      questions: form,
    });
    setLoading(false);

    if (msg && title) Alert.alert(title, msg);
  };
