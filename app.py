import plotly.express as px
import pandas as pd



df = pd.DataFrame(dict(
    r=[80, 51, 67, 84, 60],
    theta=['serve','atack','block', 'defense', 'setter']))
fig = px.line_polar(df, r='r', theta='theta', line_close=True)

fig.show()