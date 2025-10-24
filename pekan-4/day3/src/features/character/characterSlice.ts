import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface Character {
  id: number;
  name: string;
  image: string;
}

interface CharacterState {
  list: Character[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: CharacterState = {
  list: [],
  status: "idle",
  error: null,
};

// ✅ Async thunk (mengambil data dari file JSON lokal)
export const fetchCharacters = createAsyncThunk<Character[]>(
  "character/fetchCharacters",
  async () => {
    const res = await fetch("/Character.json");
    if (!res.ok) throw new Error("HTTP error");
    const result = await res.json();
    return result.slice(0, 10);
  }
);

const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "unknown";
      });
  },
});

export default characterSlice.reducer;
