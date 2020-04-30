// Generated from gram.txt by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var gramListener = require('./gramListener').gramListener;
var grammarFileName = "gram.txt";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003!\u00fa\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003",
    ";\n\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0005\u0004H\n\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006^\n\u0006",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003",
    "\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0007",
    "\no\n\n\f\n\u000e\nr\u000b\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0007\u000bz\n\u000b\f\u000b\u000e\u000b",
    "}\u000b\u000b\u0003\f\u0003\f\u0003\f\u0005\f\u0082\n\f\u0003\r\u0003",
    "\r\u0003\r\u0003\r\u0003\r\u0005\r\u0089\n\r\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0007\u000e\u0094\n\u000e\f\u000e\u000e\u000e\u0097\u000b",
    "\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0007\u000f\u009f\n\u000f\f\u000f\u000e\u000f\u00a2\u000b\u000f",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0005\u0010\u00a7\n\u0010\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0005\u0011\u00b2\n\u0011\u0003\u0012",
    "\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0005\u0012\u00b9\n",
    "\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003",
    "\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0005\u0015\u00c4\n\u0015",
    "\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0017",
    "\u0003\u0017\u0005\u0017\u00cd\n\u0017\u0003\u0018\u0003\u0018\u0003",
    "\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0007\u0018\u00d5\n\u0018",
    "\f\u0018\u000e\u0018\u00d8\u000b\u0018\u0003\u0019\u0003\u0019\u0003",
    "\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003",
    "\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003",
    "\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003",
    "\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003",
    "\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0005\u0019\u00f8\n\u0019",
    "\u0003\u0019\u0002\u0007\u0012\u0014\u001a\u001c.\u001a\u0002\u0004",
    "\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e ",
    "\"$&(*,.0\u0002\u0002\u0002\u00fd\u00022\u0003\u0002\u0002\u0002\u0004",
    ":\u0003\u0002\u0002\u0002\u0006G\u0003\u0002\u0002\u0002\bI\u0003\u0002",
    "\u0002\u0002\n]\u0003\u0002\u0002\u0002\f_\u0003\u0002\u0002\u0002\u000e",
    "c\u0003\u0002\u0002\u0002\u0010f\u0003\u0002\u0002\u0002\u0012h\u0003",
    "\u0002\u0002\u0002\u0014s\u0003\u0002\u0002\u0002\u0016\u0081\u0003",
    "\u0002\u0002\u0002\u0018\u0088\u0003\u0002\u0002\u0002\u001a\u008a\u0003",
    "\u0002\u0002\u0002\u001c\u0098\u0003\u0002\u0002\u0002\u001e\u00a6\u0003",
    "\u0002\u0002\u0002 \u00b1\u0003\u0002\u0002\u0002\"\u00b8\u0003\u0002",
    "\u0002\u0002$\u00ba\u0003\u0002\u0002\u0002&\u00bd\u0003\u0002\u0002",
    "\u0002(\u00c3\u0003\u0002\u0002\u0002*\u00c5\u0003\u0002\u0002\u0002",
    ",\u00cc\u0003\u0002\u0002\u0002.\u00ce\u0003\u0002\u0002\u00020\u00f7",
    "\u0003\u0002\u0002\u000223\u0005\"\u0012\u000234\u0005\f\u0007\u0002",
    "45\u0007\u0002\u0002\u00035\u0003\u0003\u0002\u0002\u000267\u0005\u0006",
    "\u0004\u000278\u0005\u0004\u0003\u00028;\u0003\u0002\u0002\u00029;\u0003",
    "\u0002\u0002\u0002:6\u0003\u0002\u0002\u0002:9\u0003\u0002\u0002\u0002",
    ";\u0005\u0003\u0002\u0002\u0002<H\u0005\n\u0006\u0002=H\u0005\b\u0005",
    "\u0002>?\u0005\u000e\b\u0002?@\u0007\u0004\u0002\u0002@H\u0003\u0002",
    "\u0002\u0002AB\u0005&\u0014\u0002BC\u0007\u0004\u0002\u0002CH\u0003",
    "\u0002\u0002\u0002DE\u0005(\u0015\u0002EF\u0007\u0004\u0002\u0002FH",
    "\u0003\u0002\u0002\u0002G<\u0003\u0002\u0002\u0002G=\u0003\u0002\u0002",
    "\u0002G>\u0003\u0002\u0002\u0002GA\u0003\u0002\u0002\u0002GD\u0003\u0002",
    "\u0002\u0002H\u0007\u0003\u0002\u0002\u0002IJ\u0007\u0005\u0002\u0002",
    "JK\u0007\u0006\u0002\u0002KL\u0005\u0010\t\u0002LM\u0007\u0007\u0002",
    "\u0002MN\u0005\f\u0007\u0002N\t\u0003\u0002\u0002\u0002OP\u0007\b\u0002",
    "\u0002PQ\u0007\u0006\u0002\u0002QR\u0005\u0010\t\u0002RS\u0007\u0007",
    "\u0002\u0002ST\u0005\f\u0007\u0002T^\u0003\u0002\u0002\u0002UV\u0007",
    "\b\u0002\u0002VW\u0007\u0006\u0002\u0002WX\u0005\u0010\t\u0002XY\u0007",
    "\u0007\u0002\u0002YZ\u0005\f\u0007\u0002Z[\u0007\t\u0002\u0002[\\\u0005",
    "\f\u0007\u0002\\^\u0003\u0002\u0002\u0002]O\u0003\u0002\u0002\u0002",
    "]U\u0003\u0002\u0002\u0002^\u000b\u0003\u0002\u0002\u0002_`\u0007\u000b",
    "\u0002\u0002`a\u0005\u0004\u0003\u0002ab\u0007\f\u0002\u0002b\r\u0003",
    "\u0002\u0002\u0002cd\u0007\n\u0002\u0002de\u0005\u0010\t\u0002e\u000f",
    "\u0003\u0002\u0002\u0002fg\u0005\u0012\n\u0002g\u0011\u0003\u0002\u0002",
    "\u0002hi\b\n\u0001\u0002ij\u0005\u0014\u000b\u0002jp\u0003\u0002\u0002",
    "\u0002kl\f\u0004\u0002\u0002lm\u0007\u000f\u0002\u0002mo\u0005\u0014",
    "\u000b\u0002nk\u0003\u0002\u0002\u0002or\u0003\u0002\u0002\u0002pn\u0003",
    "\u0002\u0002\u0002pq\u0003\u0002\u0002\u0002q\u0013\u0003\u0002\u0002",
    "\u0002rp\u0003\u0002\u0002\u0002st\b\u000b\u0001\u0002tu\u0005\u0016",
    "\f\u0002u{\u0003\u0002\u0002\u0002vw\f\u0004\u0002\u0002wx\u0007\u0010",
    "\u0002\u0002xz\u0005\u0016\f\u0002yv\u0003\u0002\u0002\u0002z}\u0003",
    "\u0002\u0002\u0002{y\u0003\u0002\u0002\u0002{|\u0003\u0002\u0002\u0002",
    "|\u0015\u0003\u0002\u0002\u0002}{\u0003\u0002\u0002\u0002~\u007f\u0007",
    "\u0011\u0002\u0002\u007f\u0082\u0005\u0016\f\u0002\u0080\u0082\u0005",
    "\u0018\r\u0002\u0081~\u0003\u0002\u0002\u0002\u0081\u0080\u0003\u0002",
    "\u0002\u0002\u0082\u0017\u0003\u0002\u0002\u0002\u0083\u0084\u0005\u001a",
    "\u000e\u0002\u0084\u0085\u0007\u0012\u0002\u0002\u0085\u0086\u0005\u001a",
    "\u000e\u0002\u0086\u0089\u0003\u0002\u0002\u0002\u0087\u0089\u0005\u001a",
    "\u000e\u0002\u0088\u0083\u0003\u0002\u0002\u0002\u0088\u0087\u0003\u0002",
    "\u0002\u0002\u0089\u0019\u0003\u0002\u0002\u0002\u008a\u008b\b\u000e",
    "\u0001\u0002\u008b\u008c\u0005\u001c\u000f\u0002\u008c\u0095\u0003\u0002",
    "\u0002\u0002\u008d\u008e\f\u0005\u0002\u0002\u008e\u008f\u0007\u0014",
    "\u0002\u0002\u008f\u0094\u0005\u001c\u000f\u0002\u0090\u0091\f\u0004",
    "\u0002\u0002\u0091\u0092\u0007\u0016\u0002\u0002\u0092\u0094\u0005\u001c",
    "\u000f\u0002\u0093\u008d\u0003\u0002\u0002\u0002\u0093\u0090\u0003\u0002",
    "\u0002\u0002\u0094\u0097\u0003\u0002\u0002\u0002\u0095\u0093\u0003\u0002",
    "\u0002\u0002\u0095\u0096\u0003\u0002\u0002\u0002\u0096\u001b\u0003\u0002",
    "\u0002\u0002\u0097\u0095\u0003\u0002\u0002\u0002\u0098\u0099\b\u000f",
    "\u0001\u0002\u0099\u009a\u0005\u001e\u0010\u0002\u009a\u00a0\u0003\u0002",
    "\u0002\u0002\u009b\u009c\f\u0004\u0002\u0002\u009c\u009d\u0007\u0015",
    "\u0002\u0002\u009d\u009f\u0005\u001e\u0010\u0002\u009e\u009b\u0003\u0002",
    "\u0002\u0002\u009f\u00a2\u0003\u0002\u0002\u0002\u00a0\u009e\u0003\u0002",
    "\u0002\u0002\u00a0\u00a1\u0003\u0002\u0002\u0002\u00a1\u001d\u0003\u0002",
    "\u0002\u0002\u00a2\u00a0\u0003\u0002\u0002\u0002\u00a3\u00a4\u0007\u0016",
    "\u0002\u0002\u00a4\u00a7\u0005\u001e\u0010\u0002\u00a5\u00a7\u0005 ",
    "\u0011\u0002\u00a6\u00a3\u0003\u0002\u0002\u0002\u00a6\u00a5\u0003\u0002",
    "\u0002\u0002\u00a7\u001f\u0003\u0002\u0002\u0002\u00a8\u00b2\u0007\u000e",
    "\u0002\u0002\u00a9\u00aa\u0007\u0006\u0002\u0002\u00aa\u00ab\u0005\u0010",
    "\t\u0002\u00ab\u00ac\u0007\u0007\u0002\u0002\u00ac\u00b2\u0003\u0002",
    "\u0002\u0002\u00ad\u00b2\u0007\r\u0002\u0002\u00ae\u00b2\u0007 \u0002",
    "\u0002\u00af\u00b2\u0007\u0019\u0002\u0002\u00b0\u00b2\u0005(\u0015",
    "\u0002\u00b1\u00a8\u0003\u0002\u0002\u0002\u00b1\u00a9\u0003\u0002\u0002",
    "\u0002\u00b1\u00ad\u0003\u0002\u0002\u0002\u00b1\u00ae\u0003\u0002\u0002",
    "\u0002\u00b1\u00af\u0003\u0002\u0002\u0002\u00b1\u00b0\u0003\u0002\u0002",
    "\u0002\u00b2!\u0003\u0002\u0002\u0002\u00b3\u00b4\u0005$\u0013\u0002",
    "\u00b4\u00b5\u0007\u0004\u0002\u0002\u00b5\u00b6\u0005\"\u0012\u0002",
    "\u00b6\u00b9\u0003\u0002\u0002\u0002\u00b7\u00b9\u0003\u0002\u0002\u0002",
    "\u00b8\u00b3\u0003\u0002\u0002\u0002\u00b8\u00b7\u0003\u0002\u0002\u0002",
    "\u00b9#\u0003\u0002\u0002\u0002\u00ba\u00bb\u0007\u0018\u0002\u0002",
    "\u00bb\u00bc\u0007 \u0002\u0002\u00bc%\u0003\u0002\u0002\u0002\u00bd",
    "\u00be\u0007 \u0002\u0002\u00be\u00bf\u0007\u0013\u0002\u0002\u00bf",
    "\u00c0\u0005\u0010\t\u0002\u00c0\'\u0003\u0002\u0002\u0002\u00c1\u00c4",
    "\u00050\u0019\u0002\u00c2\u00c4\u0005*\u0016\u0002\u00c3\u00c1\u0003",
    "\u0002\u0002\u0002\u00c3\u00c2\u0003\u0002\u0002\u0002\u00c4)\u0003",
    "\u0002\u0002\u0002\u00c5\u00c6\u0007 \u0002\u0002\u00c6\u00c7\u0007",
    "\u0006\u0002\u0002\u00c7\u00c8\u0005,\u0017\u0002\u00c8\u00c9\u0007",
    "\u0007\u0002\u0002\u00c9+\u0003\u0002\u0002\u0002\u00ca\u00cd\u0003",
    "\u0002\u0002\u0002\u00cb\u00cd\u0005.\u0018\u0002\u00cc\u00ca\u0003",
    "\u0002\u0002\u0002\u00cc\u00cb\u0003\u0002\u0002\u0002\u00cd-\u0003",
    "\u0002\u0002\u0002\u00ce\u00cf\b\u0018\u0001\u0002\u00cf\u00d0\u0005",
    "\u0010\t\u0002\u00d0\u00d6\u0003\u0002\u0002\u0002\u00d1\u00d2\f\u0004",
    "\u0002\u0002\u00d2\u00d3\u0007\u0017\u0002\u0002\u00d3\u00d5\u0005\u0010",
    "\t\u0002\u00d4\u00d1\u0003\u0002\u0002\u0002\u00d5\u00d8\u0003\u0002",
    "\u0002\u0002\u00d6\u00d4\u0003\u0002\u0002\u0002\u00d6\u00d7\u0003\u0002",
    "\u0002\u0002\u00d7/\u0003\u0002\u0002\u0002\u00d8\u00d6\u0003\u0002",
    "\u0002\u0002\u00d9\u00da\u0007\u001a\u0002\u0002\u00da\u00db\u0007\u0006",
    "\u0002\u0002\u00db\u00dc\u0005\u0010\t\u0002\u00dc\u00dd\u0007\u0007",
    "\u0002\u0002\u00dd\u00f8\u0003\u0002\u0002\u0002\u00de\u00df\u0007\u001b",
    "\u0002\u0002\u00df\u00e0\u0007\u0006\u0002\u0002\u00e0\u00f8\u0007\u0007",
    "\u0002\u0002\u00e1\u00e2\u0007\u001c\u0002\u0002\u00e2\u00e3\u0007\u0006",
    "\u0002\u0002\u00e3\u00e4\u0005\u0010\t\u0002\u00e4\u00e5\u0007\u0007",
    "\u0002\u0002\u00e5\u00f8\u0003\u0002\u0002\u0002\u00e6\u00e7\u0007\u001d",
    "\u0002\u0002\u00e7\u00e8\u0007\u0006\u0002\u0002\u00e8\u00e9\u0005\u0010",
    "\t\u0002\u00e9\u00ea\u0007\u0007\u0002\u0002\u00ea\u00f8\u0003\u0002",
    "\u0002\u0002\u00eb\u00ec\u0007\u001e\u0002\u0002\u00ec\u00ed\u0007\u0006",
    "\u0002\u0002\u00ed\u00ee\u0005\u0010\t\u0002\u00ee\u00ef\u0007\u0017",
    "\u0002\u0002\u00ef\u00f0\u0005\u0010\t\u0002\u00f0\u00f1\u0007\u0007",
    "\u0002\u0002\u00f1\u00f8\u0003\u0002\u0002\u0002\u00f2\u00f3\u0007\u001f",
    "\u0002\u0002\u00f3\u00f4\u0007\u0006\u0002\u0002\u00f4\u00f5\u0005\u0010",
    "\t\u0002\u00f5\u00f6\u0007\u0007\u0002\u0002\u00f6\u00f8\u0003\u0002",
    "\u0002\u0002\u00f7\u00d9\u0003\u0002\u0002\u0002\u00f7\u00de\u0003\u0002",
    "\u0002\u0002\u00f7\u00e1\u0003\u0002\u0002\u0002\u00f7\u00e6\u0003\u0002",
    "\u0002\u0002\u00f7\u00eb\u0003\u0002\u0002\u0002\u00f7\u00f2\u0003\u0002",
    "\u0002\u0002\u00f81\u0003\u0002\u0002\u0002\u0013:G]p{\u0081\u0088\u0093",
    "\u0095\u00a0\u00a6\u00b1\u00b8\u00c3\u00cc\u00d6\u00f7"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, "';'", "'while'", "'('", "')'", "'if'", 
                     "'else'", "'return'", "'{'", "'}'", null, null, "'or'", 
                     "'and'", "'not'", null, "'='", "'+'", null, "'-'", 
                     "','", null, null, "'print'", "'input'", "'open'", 
                     "'read'", "'write'", "'close'" ];

var symbolicNames = [ null, "COMMENT", "SEMI", "WHILE", "LP", "RP", "IF", 
                      "ELSE", "RETURN", "LBR", "RBR", "FPNUM", "NUM", "OR", 
                      "AND", "NOT", "RELOP", "EQ", "PLUS", "MULOP", "MINUS", 
                      "CMA", "TYPE", "STRINGCONSTANT", "PRINT", "INPUT", 
                      "OPEN", "READ", "WRITE", "CLOSE", "ID", "WHITESPACE" ];

var ruleNames =  [ "program", "stmts", "stmt", "loop", "cond", "braceblock", 
                   "returnstmt", "expr", "orexp", "andexp", "notexp", "rel", 
                   "sum", "term", "neg", "factor", "vardecllist", "vardecl", 
                   "assign", "funccall", "userfunccall", "optionalexprlist", 
                   "exprlist", "builtinfunccall" ];

function gramParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

gramParser.prototype = Object.create(antlr4.Parser.prototype);
gramParser.prototype.constructor = gramParser;

Object.defineProperty(gramParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

gramParser.EOF = antlr4.Token.EOF;
gramParser.COMMENT = 1;
gramParser.SEMI = 2;
gramParser.WHILE = 3;
gramParser.LP = 4;
gramParser.RP = 5;
gramParser.IF = 6;
gramParser.ELSE = 7;
gramParser.RETURN = 8;
gramParser.LBR = 9;
gramParser.RBR = 10;
gramParser.FPNUM = 11;
gramParser.NUM = 12;
gramParser.OR = 13;
gramParser.AND = 14;
gramParser.NOT = 15;
gramParser.RELOP = 16;
gramParser.EQ = 17;
gramParser.PLUS = 18;
gramParser.MULOP = 19;
gramParser.MINUS = 20;
gramParser.CMA = 21;
gramParser.TYPE = 22;
gramParser.STRINGCONSTANT = 23;
gramParser.PRINT = 24;
gramParser.INPUT = 25;
gramParser.OPEN = 26;
gramParser.READ = 27;
gramParser.WRITE = 28;
gramParser.CLOSE = 29;
gramParser.ID = 30;
gramParser.WHITESPACE = 31;

gramParser.RULE_program = 0;
gramParser.RULE_stmts = 1;
gramParser.RULE_stmt = 2;
gramParser.RULE_loop = 3;
gramParser.RULE_cond = 4;
gramParser.RULE_braceblock = 5;
gramParser.RULE_returnstmt = 6;
gramParser.RULE_expr = 7;
gramParser.RULE_orexp = 8;
gramParser.RULE_andexp = 9;
gramParser.RULE_notexp = 10;
gramParser.RULE_rel = 11;
gramParser.RULE_sum = 12;
gramParser.RULE_term = 13;
gramParser.RULE_neg = 14;
gramParser.RULE_factor = 15;
gramParser.RULE_vardecllist = 16;
gramParser.RULE_vardecl = 17;
gramParser.RULE_assign = 18;
gramParser.RULE_funccall = 19;
gramParser.RULE_userfunccall = 20;
gramParser.RULE_optionalexprlist = 21;
gramParser.RULE_exprlist = 22;
gramParser.RULE_builtinfunccall = 23;


function ProgramContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_program;
    return this;
}

ProgramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgramContext.prototype.constructor = ProgramContext;

ProgramContext.prototype.vardecllist = function() {
    return this.getTypedRuleContext(VardecllistContext,0);
};

ProgramContext.prototype.braceblock = function() {
    return this.getTypedRuleContext(BraceblockContext,0);
};

ProgramContext.prototype.EOF = function() {
    return this.getToken(gramParser.EOF, 0);
};

ProgramContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterProgram(this);
	}
};

ProgramContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitProgram(this);
	}
};




gramParser.ProgramContext = ProgramContext;

gramParser.prototype.program = function() {

    var localctx = new ProgramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, gramParser.RULE_program);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 48;
        this.vardecllist();
        this.state = 49;
        this.braceblock();
        this.state = 50;
        this.match(gramParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function StmtsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_stmts;
    return this;
}

StmtsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StmtsContext.prototype.constructor = StmtsContext;

StmtsContext.prototype.stmt = function() {
    return this.getTypedRuleContext(StmtContext,0);
};

StmtsContext.prototype.stmts = function() {
    return this.getTypedRuleContext(StmtsContext,0);
};

StmtsContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterStmts(this);
	}
};

StmtsContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitStmts(this);
	}
};




gramParser.StmtsContext = StmtsContext;

gramParser.prototype.stmts = function() {

    var localctx = new StmtsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, gramParser.RULE_stmts);
    try {
        this.state = 56;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case gramParser.WHILE:
        case gramParser.IF:
        case gramParser.RETURN:
        case gramParser.PRINT:
        case gramParser.INPUT:
        case gramParser.OPEN:
        case gramParser.READ:
        case gramParser.WRITE:
        case gramParser.CLOSE:
        case gramParser.ID:
            this.enterOuterAlt(localctx, 1);
            this.state = 52;
            this.stmt();
            this.state = 53;
            this.stmts();
            break;
        case gramParser.RBR:
            this.enterOuterAlt(localctx, 2);

            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function StmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_stmt;
    return this;
}

StmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StmtContext.prototype.constructor = StmtContext;

StmtContext.prototype.cond = function() {
    return this.getTypedRuleContext(CondContext,0);
};

StmtContext.prototype.loop = function() {
    return this.getTypedRuleContext(LoopContext,0);
};

StmtContext.prototype.returnstmt = function() {
    return this.getTypedRuleContext(ReturnstmtContext,0);
};

StmtContext.prototype.SEMI = function() {
    return this.getToken(gramParser.SEMI, 0);
};

StmtContext.prototype.assign = function() {
    return this.getTypedRuleContext(AssignContext,0);
};

StmtContext.prototype.funccall = function() {
    return this.getTypedRuleContext(FunccallContext,0);
};

StmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterStmt(this);
	}
};

StmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitStmt(this);
	}
};




gramParser.StmtContext = StmtContext;

gramParser.prototype.stmt = function() {

    var localctx = new StmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, gramParser.RULE_stmt);
    try {
        this.state = 69;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 58;
            this.cond();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 59;
            this.loop();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 60;
            this.returnstmt();
            this.state = 61;
            this.match(gramParser.SEMI);
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 63;
            this.assign();
            this.state = 64;
            this.match(gramParser.SEMI);
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 66;
            this.funccall();
            this.state = 67;
            this.match(gramParser.SEMI);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function LoopContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_loop;
    return this;
}

LoopContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LoopContext.prototype.constructor = LoopContext;

LoopContext.prototype.WHILE = function() {
    return this.getToken(gramParser.WHILE, 0);
};

LoopContext.prototype.LP = function() {
    return this.getToken(gramParser.LP, 0);
};

LoopContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

LoopContext.prototype.RP = function() {
    return this.getToken(gramParser.RP, 0);
};

LoopContext.prototype.braceblock = function() {
    return this.getTypedRuleContext(BraceblockContext,0);
};

LoopContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterLoop(this);
	}
};

LoopContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitLoop(this);
	}
};




gramParser.LoopContext = LoopContext;

gramParser.prototype.loop = function() {

    var localctx = new LoopContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, gramParser.RULE_loop);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 71;
        this.match(gramParser.WHILE);
        this.state = 72;
        this.match(gramParser.LP);
        this.state = 73;
        this.expr();
        this.state = 74;
        this.match(gramParser.RP);
        this.state = 75;
        this.braceblock();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function CondContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_cond;
    return this;
}

CondContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CondContext.prototype.constructor = CondContext;

CondContext.prototype.IF = function() {
    return this.getToken(gramParser.IF, 0);
};

CondContext.prototype.LP = function() {
    return this.getToken(gramParser.LP, 0);
};

CondContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

CondContext.prototype.RP = function() {
    return this.getToken(gramParser.RP, 0);
};

CondContext.prototype.braceblock = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BraceblockContext);
    } else {
        return this.getTypedRuleContext(BraceblockContext,i);
    }
};

CondContext.prototype.ELSE = function() {
    return this.getToken(gramParser.ELSE, 0);
};

CondContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterCond(this);
	}
};

CondContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitCond(this);
	}
};




gramParser.CondContext = CondContext;

gramParser.prototype.cond = function() {

    var localctx = new CondContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, gramParser.RULE_cond);
    try {
        this.state = 91;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 77;
            this.match(gramParser.IF);
            this.state = 78;
            this.match(gramParser.LP);
            this.state = 79;
            this.expr();
            this.state = 80;
            this.match(gramParser.RP);
            this.state = 81;
            this.braceblock();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 83;
            this.match(gramParser.IF);
            this.state = 84;
            this.match(gramParser.LP);
            this.state = 85;
            this.expr();
            this.state = 86;
            this.match(gramParser.RP);
            this.state = 87;
            this.braceblock();
            this.state = 88;
            this.match(gramParser.ELSE);
            this.state = 89;
            this.braceblock();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function BraceblockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_braceblock;
    return this;
}

BraceblockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BraceblockContext.prototype.constructor = BraceblockContext;

BraceblockContext.prototype.LBR = function() {
    return this.getToken(gramParser.LBR, 0);
};

BraceblockContext.prototype.stmts = function() {
    return this.getTypedRuleContext(StmtsContext,0);
};

BraceblockContext.prototype.RBR = function() {
    return this.getToken(gramParser.RBR, 0);
};

BraceblockContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterBraceblock(this);
	}
};

BraceblockContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitBraceblock(this);
	}
};




gramParser.BraceblockContext = BraceblockContext;

gramParser.prototype.braceblock = function() {

    var localctx = new BraceblockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, gramParser.RULE_braceblock);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 93;
        this.match(gramParser.LBR);
        this.state = 94;
        this.stmts();
        this.state = 95;
        this.match(gramParser.RBR);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ReturnstmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_returnstmt;
    return this;
}

ReturnstmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ReturnstmtContext.prototype.constructor = ReturnstmtContext;

ReturnstmtContext.prototype.RETURN = function() {
    return this.getToken(gramParser.RETURN, 0);
};

ReturnstmtContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

ReturnstmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterReturnstmt(this);
	}
};

ReturnstmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitReturnstmt(this);
	}
};




gramParser.ReturnstmtContext = ReturnstmtContext;

gramParser.prototype.returnstmt = function() {

    var localctx = new ReturnstmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, gramParser.RULE_returnstmt);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 97;
        this.match(gramParser.RETURN);
        this.state = 98;
        this.expr();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_expr;
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;

ExprContext.prototype.orexp = function() {
    return this.getTypedRuleContext(OrexpContext,0);
};

ExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterExpr(this);
	}
};

ExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitExpr(this);
	}
};




gramParser.ExprContext = ExprContext;

gramParser.prototype.expr = function() {

    var localctx = new ExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, gramParser.RULE_expr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 100;
        this.orexp(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function OrexpContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_orexp;
    return this;
}

OrexpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OrexpContext.prototype.constructor = OrexpContext;

OrexpContext.prototype.andexp = function() {
    return this.getTypedRuleContext(AndexpContext,0);
};

OrexpContext.prototype.orexp = function() {
    return this.getTypedRuleContext(OrexpContext,0);
};

OrexpContext.prototype.OR = function() {
    return this.getToken(gramParser.OR, 0);
};

OrexpContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterOrexp(this);
	}
};

OrexpContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitOrexp(this);
	}
};



gramParser.prototype.orexp = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new OrexpContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 16;
    this.enterRecursionRule(localctx, 16, gramParser.RULE_orexp, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 103;
        this.andexp(0);
        this._ctx.stop = this._input.LT(-1);
        this.state = 110;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new OrexpContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, gramParser.RULE_orexp);
                this.state = 105;
                if (!( this.precpred(this._ctx, 2))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                }
                this.state = 106;
                this.match(gramParser.OR);
                this.state = 107;
                this.andexp(0); 
            }
            this.state = 112;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


function AndexpContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_andexp;
    return this;
}

AndexpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AndexpContext.prototype.constructor = AndexpContext;

AndexpContext.prototype.notexp = function() {
    return this.getTypedRuleContext(NotexpContext,0);
};

AndexpContext.prototype.andexp = function() {
    return this.getTypedRuleContext(AndexpContext,0);
};

AndexpContext.prototype.AND = function() {
    return this.getToken(gramParser.AND, 0);
};

AndexpContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterAndexp(this);
	}
};

AndexpContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitAndexp(this);
	}
};



gramParser.prototype.andexp = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new AndexpContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 18;
    this.enterRecursionRule(localctx, 18, gramParser.RULE_andexp, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 114;
        this.notexp();
        this._ctx.stop = this._input.LT(-1);
        this.state = 121;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new AndexpContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, gramParser.RULE_andexp);
                this.state = 116;
                if (!( this.precpred(this._ctx, 2))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                }
                this.state = 117;
                this.match(gramParser.AND);
                this.state = 118;
                this.notexp(); 
            }
            this.state = 123;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


function NotexpContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_notexp;
    return this;
}

NotexpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NotexpContext.prototype.constructor = NotexpContext;

NotexpContext.prototype.NOT = function() {
    return this.getToken(gramParser.NOT, 0);
};

NotexpContext.prototype.notexp = function() {
    return this.getTypedRuleContext(NotexpContext,0);
};

NotexpContext.prototype.rel = function() {
    return this.getTypedRuleContext(RelContext,0);
};

NotexpContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterNotexp(this);
	}
};

NotexpContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitNotexp(this);
	}
};




gramParser.NotexpContext = NotexpContext;

gramParser.prototype.notexp = function() {

    var localctx = new NotexpContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, gramParser.RULE_notexp);
    try {
        this.state = 127;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case gramParser.NOT:
            this.enterOuterAlt(localctx, 1);
            this.state = 124;
            this.match(gramParser.NOT);
            this.state = 125;
            this.notexp();
            break;
        case gramParser.LP:
        case gramParser.FPNUM:
        case gramParser.NUM:
        case gramParser.MINUS:
        case gramParser.STRINGCONSTANT:
        case gramParser.PRINT:
        case gramParser.INPUT:
        case gramParser.OPEN:
        case gramParser.READ:
        case gramParser.WRITE:
        case gramParser.CLOSE:
        case gramParser.ID:
            this.enterOuterAlt(localctx, 2);
            this.state = 126;
            this.rel();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function RelContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_rel;
    return this;
}

RelContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RelContext.prototype.constructor = RelContext;

RelContext.prototype.sum = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SumContext);
    } else {
        return this.getTypedRuleContext(SumContext,i);
    }
};

RelContext.prototype.RELOP = function() {
    return this.getToken(gramParser.RELOP, 0);
};

RelContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterRel(this);
	}
};

RelContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitRel(this);
	}
};




gramParser.RelContext = RelContext;

gramParser.prototype.rel = function() {

    var localctx = new RelContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, gramParser.RULE_rel);
    try {
        this.state = 134;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 129;
            this.sum(0);
            this.state = 130;
            this.match(gramParser.RELOP);
            this.state = 131;
            this.sum(0);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 133;
            this.sum(0);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function SumContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_sum;
    return this;
}

SumContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SumContext.prototype.constructor = SumContext;

SumContext.prototype.term = function() {
    return this.getTypedRuleContext(TermContext,0);
};

SumContext.prototype.sum = function() {
    return this.getTypedRuleContext(SumContext,0);
};

SumContext.prototype.PLUS = function() {
    return this.getToken(gramParser.PLUS, 0);
};

SumContext.prototype.MINUS = function() {
    return this.getToken(gramParser.MINUS, 0);
};

SumContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterSum(this);
	}
};

SumContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitSum(this);
	}
};



gramParser.prototype.sum = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new SumContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 24;
    this.enterRecursionRule(localctx, 24, gramParser.RULE_sum, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 137;
        this.term(0);
        this._ctx.stop = this._input.LT(-1);
        this.state = 147;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 145;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new SumContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, gramParser.RULE_sum);
                    this.state = 139;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 140;
                    this.match(gramParser.PLUS);
                    this.state = 141;
                    this.term(0);
                    break;

                case 2:
                    localctx = new SumContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, gramParser.RULE_sum);
                    this.state = 142;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 143;
                    this.match(gramParser.MINUS);
                    this.state = 144;
                    this.term(0);
                    break;

                } 
            }
            this.state = 149;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


function TermContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_term;
    return this;
}

TermContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TermContext.prototype.constructor = TermContext;

TermContext.prototype.neg = function() {
    return this.getTypedRuleContext(NegContext,0);
};

TermContext.prototype.term = function() {
    return this.getTypedRuleContext(TermContext,0);
};

TermContext.prototype.MULOP = function() {
    return this.getToken(gramParser.MULOP, 0);
};

TermContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterTerm(this);
	}
};

TermContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitTerm(this);
	}
};



gramParser.prototype.term = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new TermContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 26;
    this.enterRecursionRule(localctx, 26, gramParser.RULE_term, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 151;
        this.neg();
        this._ctx.stop = this._input.LT(-1);
        this.state = 158;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,9,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new TermContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, gramParser.RULE_term);
                this.state = 153;
                if (!( this.precpred(this._ctx, 2))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                }
                this.state = 154;
                this.match(gramParser.MULOP);
                this.state = 155;
                this.neg(); 
            }
            this.state = 160;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,9,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


function NegContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_neg;
    return this;
}

NegContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NegContext.prototype.constructor = NegContext;

NegContext.prototype.MINUS = function() {
    return this.getToken(gramParser.MINUS, 0);
};

NegContext.prototype.neg = function() {
    return this.getTypedRuleContext(NegContext,0);
};

NegContext.prototype.factor = function() {
    return this.getTypedRuleContext(FactorContext,0);
};

NegContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterNeg(this);
	}
};

NegContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitNeg(this);
	}
};




gramParser.NegContext = NegContext;

gramParser.prototype.neg = function() {

    var localctx = new NegContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, gramParser.RULE_neg);
    try {
        this.state = 164;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case gramParser.MINUS:
            this.enterOuterAlt(localctx, 1);
            this.state = 161;
            this.match(gramParser.MINUS);
            this.state = 162;
            this.neg();
            break;
        case gramParser.LP:
        case gramParser.FPNUM:
        case gramParser.NUM:
        case gramParser.STRINGCONSTANT:
        case gramParser.PRINT:
        case gramParser.INPUT:
        case gramParser.OPEN:
        case gramParser.READ:
        case gramParser.WRITE:
        case gramParser.CLOSE:
        case gramParser.ID:
            this.enterOuterAlt(localctx, 2);
            this.state = 163;
            this.factor();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function FactorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_factor;
    return this;
}

FactorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FactorContext.prototype.constructor = FactorContext;

FactorContext.prototype.NUM = function() {
    return this.getToken(gramParser.NUM, 0);
};

FactorContext.prototype.LP = function() {
    return this.getToken(gramParser.LP, 0);
};

FactorContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

FactorContext.prototype.RP = function() {
    return this.getToken(gramParser.RP, 0);
};

FactorContext.prototype.FPNUM = function() {
    return this.getToken(gramParser.FPNUM, 0);
};

FactorContext.prototype.ID = function() {
    return this.getToken(gramParser.ID, 0);
};

FactorContext.prototype.STRINGCONSTANT = function() {
    return this.getToken(gramParser.STRINGCONSTANT, 0);
};

FactorContext.prototype.funccall = function() {
    return this.getTypedRuleContext(FunccallContext,0);
};

FactorContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterFactor(this);
	}
};

FactorContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitFactor(this);
	}
};




gramParser.FactorContext = FactorContext;

gramParser.prototype.factor = function() {

    var localctx = new FactorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, gramParser.RULE_factor);
    try {
        this.state = 175;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 166;
            this.match(gramParser.NUM);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 167;
            this.match(gramParser.LP);
            this.state = 168;
            this.expr();
            this.state = 169;
            this.match(gramParser.RP);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 171;
            this.match(gramParser.FPNUM);
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 172;
            this.match(gramParser.ID);
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 173;
            this.match(gramParser.STRINGCONSTANT);
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 174;
            this.funccall();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function VardecllistContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_vardecllist;
    return this;
}

VardecllistContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VardecllistContext.prototype.constructor = VardecllistContext;

VardecllistContext.prototype.vardecl = function() {
    return this.getTypedRuleContext(VardeclContext,0);
};

VardecllistContext.prototype.SEMI = function() {
    return this.getToken(gramParser.SEMI, 0);
};

VardecllistContext.prototype.vardecllist = function() {
    return this.getTypedRuleContext(VardecllistContext,0);
};

VardecllistContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterVardecllist(this);
	}
};

VardecllistContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitVardecllist(this);
	}
};




gramParser.VardecllistContext = VardecllistContext;

gramParser.prototype.vardecllist = function() {

    var localctx = new VardecllistContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, gramParser.RULE_vardecllist);
    try {
        this.state = 182;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case gramParser.TYPE:
            this.enterOuterAlt(localctx, 1);
            this.state = 177;
            this.vardecl();
            this.state = 178;
            this.match(gramParser.SEMI);
            this.state = 179;
            this.vardecllist();
            break;
        case gramParser.LBR:
            this.enterOuterAlt(localctx, 2);

            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function VardeclContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_vardecl;
    return this;
}

VardeclContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VardeclContext.prototype.constructor = VardeclContext;

VardeclContext.prototype.TYPE = function() {
    return this.getToken(gramParser.TYPE, 0);
};

VardeclContext.prototype.ID = function() {
    return this.getToken(gramParser.ID, 0);
};

VardeclContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterVardecl(this);
	}
};

VardeclContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitVardecl(this);
	}
};




gramParser.VardeclContext = VardeclContext;

gramParser.prototype.vardecl = function() {

    var localctx = new VardeclContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, gramParser.RULE_vardecl);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 184;
        this.match(gramParser.TYPE);
        this.state = 185;
        this.match(gramParser.ID);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function AssignContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_assign;
    return this;
}

AssignContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssignContext.prototype.constructor = AssignContext;

AssignContext.prototype.ID = function() {
    return this.getToken(gramParser.ID, 0);
};

AssignContext.prototype.EQ = function() {
    return this.getToken(gramParser.EQ, 0);
};

AssignContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

AssignContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterAssign(this);
	}
};

AssignContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitAssign(this);
	}
};




gramParser.AssignContext = AssignContext;

gramParser.prototype.assign = function() {

    var localctx = new AssignContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, gramParser.RULE_assign);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 187;
        this.match(gramParser.ID);
        this.state = 188;
        this.match(gramParser.EQ);
        this.state = 189;
        this.expr();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function FunccallContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_funccall;
    return this;
}

FunccallContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunccallContext.prototype.constructor = FunccallContext;

FunccallContext.prototype.builtinfunccall = function() {
    return this.getTypedRuleContext(BuiltinfunccallContext,0);
};

FunccallContext.prototype.userfunccall = function() {
    return this.getTypedRuleContext(UserfunccallContext,0);
};

FunccallContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterFunccall(this);
	}
};

FunccallContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitFunccall(this);
	}
};




gramParser.FunccallContext = FunccallContext;

gramParser.prototype.funccall = function() {

    var localctx = new FunccallContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, gramParser.RULE_funccall);
    try {
        this.state = 193;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case gramParser.PRINT:
        case gramParser.INPUT:
        case gramParser.OPEN:
        case gramParser.READ:
        case gramParser.WRITE:
        case gramParser.CLOSE:
            this.enterOuterAlt(localctx, 1);
            this.state = 191;
            this.builtinfunccall();
            break;
        case gramParser.ID:
            this.enterOuterAlt(localctx, 2);
            this.state = 192;
            this.userfunccall();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function UserfunccallContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_userfunccall;
    return this;
}

UserfunccallContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UserfunccallContext.prototype.constructor = UserfunccallContext;

UserfunccallContext.prototype.ID = function() {
    return this.getToken(gramParser.ID, 0);
};

UserfunccallContext.prototype.LP = function() {
    return this.getToken(gramParser.LP, 0);
};

UserfunccallContext.prototype.optionalexprlist = function() {
    return this.getTypedRuleContext(OptionalexprlistContext,0);
};

UserfunccallContext.prototype.RP = function() {
    return this.getToken(gramParser.RP, 0);
};

UserfunccallContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterUserfunccall(this);
	}
};

UserfunccallContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitUserfunccall(this);
	}
};




gramParser.UserfunccallContext = UserfunccallContext;

gramParser.prototype.userfunccall = function() {

    var localctx = new UserfunccallContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, gramParser.RULE_userfunccall);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 195;
        this.match(gramParser.ID);
        this.state = 196;
        this.match(gramParser.LP);
        this.state = 197;
        this.optionalexprlist();
        this.state = 198;
        this.match(gramParser.RP);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function OptionalexprlistContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_optionalexprlist;
    return this;
}

OptionalexprlistContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OptionalexprlistContext.prototype.constructor = OptionalexprlistContext;

OptionalexprlistContext.prototype.exprlist = function() {
    return this.getTypedRuleContext(ExprlistContext,0);
};

OptionalexprlistContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterOptionalexprlist(this);
	}
};

OptionalexprlistContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitOptionalexprlist(this);
	}
};




gramParser.OptionalexprlistContext = OptionalexprlistContext;

gramParser.prototype.optionalexprlist = function() {

    var localctx = new OptionalexprlistContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, gramParser.RULE_optionalexprlist);
    try {
        this.state = 202;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case gramParser.RP:
            this.enterOuterAlt(localctx, 1);

            break;
        case gramParser.LP:
        case gramParser.FPNUM:
        case gramParser.NUM:
        case gramParser.NOT:
        case gramParser.MINUS:
        case gramParser.STRINGCONSTANT:
        case gramParser.PRINT:
        case gramParser.INPUT:
        case gramParser.OPEN:
        case gramParser.READ:
        case gramParser.WRITE:
        case gramParser.CLOSE:
        case gramParser.ID:
            this.enterOuterAlt(localctx, 2);
            this.state = 201;
            this.exprlist(0);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ExprlistContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_exprlist;
    return this;
}

ExprlistContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprlistContext.prototype.constructor = ExprlistContext;

ExprlistContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

ExprlistContext.prototype.exprlist = function() {
    return this.getTypedRuleContext(ExprlistContext,0);
};

ExprlistContext.prototype.CMA = function() {
    return this.getToken(gramParser.CMA, 0);
};

ExprlistContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterExprlist(this);
	}
};

ExprlistContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitExprlist(this);
	}
};



gramParser.prototype.exprlist = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExprlistContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 44;
    this.enterRecursionRule(localctx, 44, gramParser.RULE_exprlist, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 205;
        this.expr();
        this._ctx.stop = this._input.LT(-1);
        this.state = 212;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,15,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new ExprlistContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, gramParser.RULE_exprlist);
                this.state = 207;
                if (!( this.precpred(this._ctx, 2))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                }
                this.state = 208;
                this.match(gramParser.CMA);
                this.state = 209;
                this.expr(); 
            }
            this.state = 214;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,15,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


function BuiltinfunccallContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_builtinfunccall;
    return this;
}

BuiltinfunccallContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BuiltinfunccallContext.prototype.constructor = BuiltinfunccallContext;

BuiltinfunccallContext.prototype.PRINT = function() {
    return this.getToken(gramParser.PRINT, 0);
};

BuiltinfunccallContext.prototype.LP = function() {
    return this.getToken(gramParser.LP, 0);
};

BuiltinfunccallContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

BuiltinfunccallContext.prototype.RP = function() {
    return this.getToken(gramParser.RP, 0);
};

BuiltinfunccallContext.prototype.INPUT = function() {
    return this.getToken(gramParser.INPUT, 0);
};

BuiltinfunccallContext.prototype.OPEN = function() {
    return this.getToken(gramParser.OPEN, 0);
};

BuiltinfunccallContext.prototype.READ = function() {
    return this.getToken(gramParser.READ, 0);
};

BuiltinfunccallContext.prototype.WRITE = function() {
    return this.getToken(gramParser.WRITE, 0);
};

BuiltinfunccallContext.prototype.CMA = function() {
    return this.getToken(gramParser.CMA, 0);
};

BuiltinfunccallContext.prototype.CLOSE = function() {
    return this.getToken(gramParser.CLOSE, 0);
};

BuiltinfunccallContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterBuiltinfunccall(this);
	}
};

BuiltinfunccallContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitBuiltinfunccall(this);
	}
};




gramParser.BuiltinfunccallContext = BuiltinfunccallContext;

gramParser.prototype.builtinfunccall = function() {

    var localctx = new BuiltinfunccallContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, gramParser.RULE_builtinfunccall);
    try {
        this.state = 245;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case gramParser.PRINT:
            this.enterOuterAlt(localctx, 1);
            this.state = 215;
            this.match(gramParser.PRINT);
            this.state = 216;
            this.match(gramParser.LP);
            this.state = 217;
            this.expr();
            this.state = 218;
            this.match(gramParser.RP);
            break;
        case gramParser.INPUT:
            this.enterOuterAlt(localctx, 2);
            this.state = 220;
            this.match(gramParser.INPUT);
            this.state = 221;
            this.match(gramParser.LP);
            this.state = 222;
            this.match(gramParser.RP);
            break;
        case gramParser.OPEN:
            this.enterOuterAlt(localctx, 3);
            this.state = 223;
            this.match(gramParser.OPEN);
            this.state = 224;
            this.match(gramParser.LP);
            this.state = 225;
            this.expr();
            this.state = 226;
            this.match(gramParser.RP);
            break;
        case gramParser.READ:
            this.enterOuterAlt(localctx, 4);
            this.state = 228;
            this.match(gramParser.READ);
            this.state = 229;
            this.match(gramParser.LP);
            this.state = 230;
            this.expr();
            this.state = 231;
            this.match(gramParser.RP);
            break;
        case gramParser.WRITE:
            this.enterOuterAlt(localctx, 5);
            this.state = 233;
            this.match(gramParser.WRITE);
            this.state = 234;
            this.match(gramParser.LP);
            this.state = 235;
            this.expr();
            this.state = 236;
            this.match(gramParser.CMA);
            this.state = 237;
            this.expr();
            this.state = 238;
            this.match(gramParser.RP);
            break;
        case gramParser.CLOSE:
            this.enterOuterAlt(localctx, 6);
            this.state = 240;
            this.match(gramParser.CLOSE);
            this.state = 241;
            this.match(gramParser.LP);
            this.state = 242;
            this.expr();
            this.state = 243;
            this.match(gramParser.RP);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


gramParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 8:
			return this.orexp_sempred(localctx, predIndex);
	case 9:
			return this.andexp_sempred(localctx, predIndex);
	case 12:
			return this.sum_sempred(localctx, predIndex);
	case 13:
			return this.term_sempred(localctx, predIndex);
	case 22:
			return this.exprlist_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

gramParser.prototype.orexp_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 2);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

gramParser.prototype.andexp_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 1:
			return this.precpred(this._ctx, 2);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

gramParser.prototype.sum_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 2:
			return this.precpred(this._ctx, 3);
		case 3:
			return this.precpred(this._ctx, 2);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

gramParser.prototype.term_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 4:
			return this.precpred(this._ctx, 2);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

gramParser.prototype.exprlist_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 5:
			return this.precpred(this._ctx, 2);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.gramParser = gramParser;
