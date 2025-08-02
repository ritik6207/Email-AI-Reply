import {
  Box,
  Button,
  CircularProgress,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [emailContent, setEmailContent] = useState("");
  const [tone, setTone] = useState("");
  const [generatedReply, setGeneratedReply] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://email-ai-reply.onrender.com/api/email/generate",
        {
          emailContent,
          tone,
        }
      );
      setGeneratedReply(
        typeof response.data === "string"
          ? response.data
          : JSON.stringify(response.data)
      );
    } catch (error) {
      console.error("Error generating reply:", error);
      setGeneratedReply("Failed to generate reply. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Email Reply Generator
        </Typography>

        <Box sx={{ mx: 3 }}>
          <TextField
            fullWidth
            label="Original Email Content"
            multiline
            rows={6}
            variant="outlined"
            placeholder="Type your email content..."
            value={emailContent || ""}
            onChange={e => setEmailContent(e.target.value)}
            sx={{ mb: 2 }}
          />

          <FormControl fullWidth>
            <InputLabel>Tone (Optional)</InputLabel>
            <Select
              value={tone || ""}
              label="Tone (Optional)"
              onChange={e => setTone(e.target.value)}
              sx={{ mb: 2 }}
            >
              <MenuItem value="">None</MenuItem>
              <MenuItem value="professional">Professional</MenuItem>
              <MenuItem value="casual">Casual</MenuItem>
              <MenuItem value="friendly">Friendly</MenuItem>
              <MenuItem value="formal">Formal</MenuItem>
              <MenuItem value="humorous">Humorous</MenuItem>
              <MenuItem value="empathetic">Empathetic</MenuItem>
              <MenuItem value="concise">Concise</MenuItem>
              <MenuItem value="detailed">Detailed</MenuItem>
              <MenuItem value="persuasive">Persuasive</MenuItem>
              <MenuItem value="apologetic">Apologetic</MenuItem>
              <MenuItem value="assertive">Assertive</MenuItem>
              <MenuItem value="enthusiastic">Enthusiastic</MenuItem>
              <MenuItem value="neutral">Neutral</MenuItem>
              <MenuItem value="sympathetic">Sympathetic</MenuItem>
              <MenuItem value="confident">Confident</MenuItem>
              <MenuItem value="inspirational">Inspirational</MenuItem>
              <MenuItem value="supportive">Supportive</MenuItem>
              <MenuItem value="informative">Informative</MenuItem>
              <MenuItem value="reassuring">Reassuring</MenuItem>
              <MenuItem value="encouraging">Encouraging</MenuItem>
              <MenuItem value="respectful">Respectful</MenuItem>
              <MenuItem value="grateful">Grateful</MenuItem>
              <MenuItem value="optimistic">Optimistic</MenuItem>
              <MenuItem value="sincere">Sincere</MenuItem>
              <MenuItem value="direct">Direct</MenuItem>
              <MenuItem value="thoughtful">Thoughtful</MenuItem>
              <MenuItem value="concerned">Concerned</MenuItem>
              <MenuItem value="motivational">Motivational</MenuItem>
              <MenuItem value="reassuring">Reassuring</MenuItem>
              <MenuItem value="caring">Caring</MenuItem>
              <MenuItem value="respectful">Respectful</MenuItem>
              <MenuItem value="appreciative">Appreciative</MenuItem>
              <MenuItem value="understanding">Understanding</MenuItem>
              <MenuItem value="patient">Patient</MenuItem>
              <MenuItem value="constructive">Constructive</MenuItem>
              <MenuItem value="positive">Positive</MenuItem>
              <MenuItem value="negative">Negative</MenuItem>
              <MenuItem value="critical">Critical</MenuItem>
              <MenuItem value="supportive">Supportive</MenuItem>
              <MenuItem value="encouraging">Encouraging</MenuItem>
              <MenuItem value="reassuring">Reassuring</MenuItem>
              <MenuItem value="empathetic">Empathetic</MenuItem>
              <MenuItem value="sympathetic">Sympathetic</MenuItem>
              <MenuItem value="understanding">Understanding</MenuItem>
              <MenuItem value="compassionate">Compassionate</MenuItem>
            </Select>
          </FormControl>

          <Button
            variant="contained"
            onClick={handleSubmit}
            disabled={!emailContent || loading}
          >
            {loading ? <CircularProgress size={24} /> : "Generate Reply"}
          </Button>
        </Box>

        <Box sx={{ mx: 3 }}>
          <TextField
            fullWidth
            multiline
            rows={6}
            variant="outlined"
            value={generatedReply || ""}
            placeholder="Generated reply will appear here..."
            InputProps={{
              readOnly: true,
            }}
            sx={{ mt: 2, mb: 2 }}
          />
          <Button
            variant="outlined"
            onClick={() => navigator.clipboard.writeText(generatedReply)}
          >
            Copy to Clipboard
          </Button>
        </Box>
      </Container>
    </>
  );
}

export default App;
