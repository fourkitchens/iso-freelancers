// MarkdownRenderer.js
import ReactMarkdown from 'react-markdown';

const MarkdownRenderer = ({ markdown }) => (
  <ReactMarkdown>{markdown}</ReactMarkdown>
);

export default MarkdownRenderer;
